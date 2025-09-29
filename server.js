const express = require('express');
const http = require('http');
const { Pool, Client } = require('pg');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
// PostgreSQL istemcisi ayarları
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'real_estate',
  password: 'onur2000',
  port: 5432,
});
client.connect();
// Ev verilerini veritabanından çek
app.get('/api/properties', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM properties ORDER BY property_id');
    res.json(result.rows);
  } catch (error) {
    console.error('Veritabanı hatası:', error);
    res.status(500).send('Sunucu hatası');
  }
});
// PostgreSQL bağlantı ayarları
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'real_estate',
  password: 'onur2000',
  port: 5432,
});
// İstemciden gelen bağlantı isteklerini dinle
io.on('connection', (socket) => {
  console.log('Yeni bir kullanıcı bağlandı');
  // İstemciden gelen 'getUsers' mesajını dinle
  socket.on('getUsers', async () => {
    try {
      const result = await pool.query('SELECT * FROM users ORDER BY user_id');
      socket.emit('usersData', result.rows);
    } catch (error) {
      console.error('Veritabanı hatası:', error);
      socket.emit('error', 'Veri alınırken hata oluştu');
    }
  });
    // Mülk ekleme işlemi
    socket.on('createProperty', async (property, callback) => {
      try {
        await pool.query(`
          INSERT INTO properties (color, number_of_rooms,
           number_of_bathrooms,kitchen_type, address,
            building_age, floor_level, has_garage,
             has_natural_gas, has_underfloor_heating,
              is_central_location)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);
        `, [
          property.color,
          property.number_of_rooms,
          property.number_of_bathrooms,
          property.kitchen_type,
          property.address,
          property.building_age,
          property.floor_level,
          property.has_garage,
          property.has_natural_gas,
          property.has_underfloor_heating,
          property.is_central_location
        ]);
        callback({ success: true, message: 'Mülk başarıyla eklendi' });
      } catch (error) {
        console.error('Mülk eklenirken hata oluştu:', error);
        callback({ success: false, message: 'Mülk eklenirken hata oluştu' });
      }
    });
    // Evleri silme işlemi
socket.on('deleteProperty', async (property_id) => {
  try {
      const result = await pool.query('DELETE FROM properties WHERE property_id = $1', [property_id]);
      socket.emit('deletePropertyResult', { success: true });
  } catch (error) {
      console.error('Veritabanı hatası:', error);
      socket.emit('deletePropertyResult', { success: false, message: 'Mülk silinirken hata oluştu' });
  }
});
// Mülk güncelleme işlemi
socket.on('updateProperty', async (property, callback) => {
  try {
      const result = await pool.query(`
          UPDATE properties 
          SET color = $1, number_of_rooms = $2,
          number_of_bathrooms = $3, kitchen_type = $4,
          has_garage = $5, has_natural_gas = $6,
          has_underfloor_heating = $7, 
          building_age = $8, floor_level = $9,
          address = $10, is_central_location = $11
          WHERE property_id = $12
      `, [
          property.color,
          property.number_of_rooms,
          property.number_of_bathrooms,
          property.kitchen_type,
          property.has_garage,
          property.has_natural_gas,
          property.has_underfloor_heating,
          property.building_age,
          property.floor_level,
          property.address,
          property.is_central_location,
          property.property_id
      ]);
      if (result.rowCount > 0) {
          socket.emit('updatePropertyResult', { success: true });
      } else {
          socket.emit('updatePropertyResult', { success: false, message: 'Güncellenen mülk bulunamadı.' });
      }
  } catch (error) {
      console.error('Mülk güncellenirken hata oluştu:', error);
      socket.emit('updatePropertyResult', { success: false, message: 'Mülk güncellenirken bir hata oluştu.' });
  }
});
  //kullanıcıyı silebiliyor
  socket.on('deleteUser', async (id) => {
    try {
      await pool.query('DELETE FROM users WHERE user_id=$1', [id]);
      socket.emit('deleteResult', { success: true });
    } catch (error) {
      console.error('Veritabanı hatası:', error);
      socket.emit('deleteResult', { success: false, message: 'Kullanıcı silinirken hata oluştu' });
    }
  });
  // kullanıcı oluşturabiliyor
  socket.on('createUser', async (user) => {
    try {
      await pool.query(`
        INSERT INTO users (kullaniciAdi, sifre, pin, tarih, admin, adres)
        VALUES ($1, $2, $3, $4, $5, $6);
      `, [
        user.kullaniciAdi,user.sifre,user.pin,user.tarih,
        user.admin,user.adres
      ]);
      socket.emit('createResult', { success: true });
    } catch (error) {
      console.error('Kullanıcı oluşturulurken hata oluştu:', error);
      socket.emit('createResult', { success: false, message: 'Kullanıcı oluşturulurken hata oluştu' });
    }
  });
  // İstemciden gelen 'addUsers' mesajını dinle
  socket.on('addUsers', async (users, callback) => {
    try {
      const promises = users.map(user => {
        return pool.query(`
          INSERT INTO users (kullaniciAdi, sifre, pin, tarih, admin, adres)
          VALUES ($1, $2, $3, $4, $5, $6);
        `, [
          user.kullaniciAdi,user.sifre,user.pin,user.tarih,user.admin,
          user.adres
        ]);
      });
      await Promise.all(promises);
      console.log('Kullanıcılar başarıyla eklendi.');
      callback({ success: true, message: 'Kullanıcılar başarıyla eklendi' });
    } catch (error) {
      console.error('Kullanıcı eklenirken hata oluştu:', error);
      callback({ success: false, message: 'Kullanıcı eklenirken hata oluştu' });
    }
  });
  // Kullanıcıyı güncelleme işlemi
socket.on('updateUser', async (user) => {
  try {
    const result = await pool.query(`
      UPDATE users 
      SET kullaniciAdi = $1, sifre = $2, pin = $3, tarih = $4, adres = $5, admin = $6
      WHERE user_id = $7
    `, [
      user.kullaniciadi,user.sifre,user.pin,user.tarih,user.adres,user.admin,user.user_id
    ]);
    socket.emit('updateResult', { success: true });
  } catch (error) {
    console.error('Kullanıcı güncellenirken hata oluştu:', error);
    socket.emit('updateResult', { success: false, message: 'Kullanıcı güncellenirken hata oluştu' });
  }
});
  // Kullanıcı giriş işlemi
  socket.on('login', async (data) => {
    const { kullaniciAdi, sifre, pin, tarih, selectedValue, enteredCode, displayedCode } = data;
    try {
      // Veritabanından kullanıcıyı kontrol et
      const result = await pool.query(
        'SELECT * FROM users WHERE kullaniciAdi = $1 AND sifre = $2 AND pin = $3 AND tarih = $4', 
        [kullaniciAdi, sifre, pin, tarih] );
      if (result.rows.length > 0 && enteredCode === displayedCode) {
        // Giriş başarılı, admin olup olmadığını kontrol et
        const user = result.rows[0];
        const redirectUrl = user.admin ? 'http://localhost:3000/adminPage.html' : 'http://localhost:3000/mainPage.html'; 
        socket.emit('loginResult', {success: true,message: 'Giriş başarılı!',redirectUrl: redirectUrl});
      } else {
        // Giriş başarısız
        socket.emit('loginResult', {success: false, message: 'Kullanıcı adı, şifre, pin, tarih veya kod hatalı!'});
      }
    } catch (error) {
      console.error('Veritabanı hatası:', error);
      socket.emit('loginResult', { success: false, message: 'Bir hata oluştu, lütfen tekrar deneyin.'});
    }
  });
   /////////////////////////////////////////////////////////////  burada mesage uygulaması gibi bir şey yapacaz
  socket.on('getUsers_msg', async () => {
    try {
        const result = await pool.query('SELECT user_id, kullaniciAdi FROM users ORDER BY user_id');
        socket.emit('usersData_msg', result.rows);
    } catch (error) {
        console.error('Veritabanı hatası:', error);
        socket.emit('error', 'Veri alınırken hata oluştu');
    }
});
// Belirli iki kullanıcı arasındaki mesajları getir
socket.on('getMessagesBetweenUsers', async (data) => {
    const { currentUserId, targetUserId } = data;
    try {
        const result = await pool.query(`
            SELECT * FROM messages 
            WHERE (sender_id = $1 AND receiver_id = $2) OR (sender_id = $2 AND receiver_id = $1)
            ORDER BY timestamp ASC`, [currentUserId, targetUserId]);
        socket.emit('messagesBetweenUsersResult', result.rows);
    } catch (error) {
        console.error('Mesajlar alınırken hata oluştu:', error);
    }
});
  const user_id = socket.handshake.query.user_id; // Kullanıcı kimliğini socket bağlantısı üzerinden alın
  socket.join('user_' + user_id); // Kullanıcıyı kendine özel bir odaya dahil et
  console.log('Kullanıcı bağlandı: ', user_id);
  socket.on('getAllMessages', async (veri, callBack) => {
    try {
        const result = await pool.query(`
            SELECT sender_id, receiver_id, message, file_name, file_type, file_data, timestamp 
            FROM messages 
            WHERE (sender_id=$1 AND receiver_id=$2) OR (sender_id=$2 AND receiver_id=$1)
            ORDER BY timestamp ASC`, 
            [veri.user_id, veri.currentUser]
        );// üstteki veritabanından çekiyor bi öncekinde urası farklı
        callBack(result.rows); // Tüm mesajları ve dosya bilgilerini geri döndür
    } catch (error) {
        console.error('Mesajlar alınırken hata oluştu:', error);
        callBack([]); // Hata durumunda boş bir liste döndür
    }
});
  // Belirli bir kullanıcıya mesaj göndermek
  socket.on('sendMessageToUser', async (data) => {
    const targetUserId = data.targetUserId;
    const message = data.message;
    const senderId = data.senderId;
    try {
      // Mesajı veritabanına kaydet
      await pool.query(`
        INSERT INTO messages (sender_id, receiver_id, message, timestamp)
        VALUES ($1, $2, $3, NOW());
      `, [senderId, targetUserId, message]);

      // Hem gönderen hem de alıcıya mesajı ilet
      io.to('user_' + targetUserId).emit('receiveMessage', { message, senderId });
      //io.to('user_' + user_id).emit('receiveMessage', { message, senderId });
    } catch (error) {
      console.error('Mesaj gönderilirken hata oluştu:', error);
    }
  });
  // Eski mesajları yükleme
socket.on('loadMessages', async (data) => {
  const { currentUser } = data;
  try {
    const result = await pool.query(
      'SELECT * FROM messages WHERE sender_id = $1 OR receiver_id = $1 ORDER BY timestamp ASC', 
      [currentUser]
    );
    socket.emit('loadMessagesResult', result.rows);
  } catch (error) {
    console.error('Mesajlar yüklenirken hata oluştu:', error);
  }
});
socket.on('getLastMessage', async (data, callback) => {
  const { userId, currentUser } = data;
  try {
      const result = await pool.query(`
          SELECT message FROM messages 
          WHERE (sender_id = $1 AND receiver_id = $2) OR (sender_id = $2 AND receiver_id = $1)
          ORDER BY timestamp DESC LIMIT 1`, [userId, currentUser]);
      callback(result.rows[0]);
  } catch (error) {
      console.error('Son mesaj alınırken hata oluştu:', error);
      callback(null);
  }
});
socket.on('sendBlobToUser', async (data) => {//burası aynı
  const { targetUserId, blob, fileName, fileType, senderId } = data;
  try {
      // Mesajı veritabanına kaydetmek için base64 string'e dönüştürdük
      const base64String = Buffer.from(new Uint8Array(blob)).toString('base64');
      const message = `Dosya gönderildi: ${fileName}`;
      await pool.query(`
          INSERT INTO messages (sender_id, receiver_id, message, file_name, file_type, file_data, timestamp)
          VALUES ($1, $2, $3, $4, $5, $6, NOW());
      `, [senderId, targetUserId, message, fileName, fileType, base64String]);
      // Dosyayı alıcıya gönder
      io.to('user_' + targetUserId).emit('receiveMessage', { 
          message, senderId, blob: base64String, 
          fileName, fileType 
      });
  } catch (error) {
      console.error('Blob dosya gönderilirken hata oluştu:', error);
  }
});
  // Bağlantı koptuğunda
  socket.on('disconnect', () => {
    console.log('Kullanıcı bağlantısı kesildi');
  });
});
// Sunucuyu başlat
const port = 3000;
server.listen(port, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});

// Statik dosyaları sunmak için
app.use(express.static('public'));
