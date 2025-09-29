/*
const { Client } = require('pg');
const staticData = require('./evobjeleri');

// Veritabanı bağlantı ayarlarını yapın
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'real_estate',
  password: 'onur2000',
  port: 5432,
});

client.connect();

// Tabloyu kontrol edin veya oluşturun
client.query(`
  CREATE TABLE IF NOT EXISTS properties (
    property_id VARCHAR PRIMARY KEY,
    color VARCHAR,
    number_of_rooms INTEGER,
    number_of_bathrooms INTEGER,
    kitchen_type VARCHAR,
    has_garage BOOLEAN,
    has_natural_gas BOOLEAN,
    has_underfloor_heating BOOLEAN,
    building_age INTEGER,
    floor_level INTEGER,
    address VARCHAR,
    is_central_location BOOLEAN
  );
`, (err, res) => {
  if (err) {
    console.error('Tablo oluşturulurken hata oluştu:', err);
    client.end();
    return;
  }

  console.log('Tablo kontrol edildi veya oluşturuldu.');

  // Her bir kaydı SQL'e eklemek için bir dizi Promise oluşturun
  const promises = staticData.map(data => {
    const attributes = data.attributes;
    const location = attributes.location;

    return client.query(`
      INSERT INTO properties (property_id, color, number_of_rooms, number_of_bathrooms, kitchen_type,
      has_garage, has_natural_gas, has_underfloor_heating, building_age, floor_level, address, is_central_location)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      ON CONFLICT (property_id) DO NOTHING;
    `, [
      data.property_id,
      attributes.color,
      attributes.number_of_rooms,
      attributes.number_of_bathrooms,
      attributes.kitchen_type,
      attributes.has_garage,
      attributes.has_natural_gas,
      attributes.has_underfloor_heating,
      attributes.building_age,
      attributes.floor_level,
      location.address,
      location.is_central_location
    ]);
  });

  // Tüm işlemler tamamlandığında
  Promise.all(promises)
    .then(results => {
      console.log('Tüm veriler başarıyla eklendi.');
    })
    .catch(err => {
      console.error('Veri eklenirken hata oluştu:', err);
    })
    .finally(() => {
      // Bağlantıyı kapat
      client.end(() => {
        console.log('Veritabanı bağlantısı kapatıldı.');
      });
    });
});
*/