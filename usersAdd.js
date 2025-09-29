
/*
const { Pool } = require('pg');

// PostgreSQL için bağlantı havuzu oluştur
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'real_estate',
    password: 'onur2000',
    port: 5432,
  });
  
  // Tabloyu kontrol edin veya oluşturun
  async function createTable() {
    try {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          kullaniciAdi VARCHAR(50) NOT NULL,
          sifre VARCHAR(255) NOT NULL,
          pin INTEGER NOT NULL,
          tarih DATE NOT NULL,
          admin BOOLEAN NOT NULL,
          adres VARCHAR(255)
        );
      `);
      console.log('Tablo kontrol edildi veya oluşturuldu.');
    } catch (err) {
      console.error('Tablo oluşturulurken hata oluştu:', err);
    }
  }
  
  // Kullanıcıları veritabanına ekle     DELETE * FROM users bu da silme
  async function addUsers() {
    const users = [
      { kullaniciAdi: "Alice2", sifre: "sifre123", pin: 1234, tarih: "2000-12-02", admin: false, adres: "Türkiye" },
      { kullaniciAdi: "Bob", sifre: "securePass456", pin: 5678, tarih: "2000-12-02", admin: false, adres: "Türkiye" },
      { kullaniciAdi: "Charlie", sifre: "charlie789", pin: 9101, tarih: "2000-12-02", admin: false, adres: "Türkiye" },
      { kullaniciAdi: "Daisy", sifre: "daisyPass321", pin: 1121, tarih: "2000-12-02", admin: false, adres: "Türkiye" },
      { kullaniciAdi: "Ethan", sifre: "ethanSecure987", pin: 3141, tarih: "2000-12-02", admin: false, adres: "Türkiye" },
      { kullaniciAdi: "Fiona", sifre: "fionasifre654", pin: 5161, tarih: "2000-12-02", admin: false, adres: "Türkiye" },
      { kullaniciAdi: "George", sifre: "george789", pin: 7181, tarih: "2000-12-02", admin: false, adres: "Türkiye" },
      { kullaniciAdi: "Admin", sifre: "admin123", pin: 1919, tarih: "2024-08-02", admin: true, adres: "Türkiye" },
      { kullaniciAdi: "Seda", sifre: "seda123", pin: 1234, tarih: "2000-12-02", admin: false, adres: "Türkiye" },
      { kullaniciAdi: "Onurhan", sifre: "onurhan123", pin: 1234, tarih: "2000-12-02", admin: false, adres: "Türkiye" }
    ];
  
    try {
      const promises = users.map(user => {
        return pool.query(`
          INSERT INTO users (kullaniciAdi, sifre, pin, tarih, admin, adres)
          VALUES ($1, $2, $3, $4, $5, $6)
          ON CONFLICT DO NOTHING;
        `, [
          user.kullaniciAdi,
          user.sifre,
          user.pin,
          user.tarih,
          user.admin,
          user.adres
        ]);
      });
  
      await Promise.all(promises);
      console.log('Tüm kullanıcılar başarıyla eklendi.');
    } catch (err) {
      console.error('Kullanıcı eklenirken hata oluştu:', err);
    } finally {
      await pool.end();
      console.log('Veritabanı bağlantısı kapatıldı.');
    }
  }
  // Ana fonksiyon
  async function main() {
    await createTable();
    await addUsers();
  }
  
  main();
  */