let now = new Date(); // tarih saat bilgisi

// Get Methods
sonuc = now;
sonuc = now.getDate(); // gun
sonuc = now.getDay(); // 0: pazar - 6: cumartesi
sonuc = now.getHours(); // saat
sonuc = now.getFullYear(); // yil
sonuc = now.getMilliseconds(); // milisaniye
sonuc = now.getSeconds(); // saniye
sonuc = now.getMonth(); // ay
sonuc = now.getMinutes(); // dakika 
sonuc = now.getTime(); // 


// Set Methods
now.setFullYear(2025);
now.setMonth(7);

sonuc = now;


console.log(sonuc);