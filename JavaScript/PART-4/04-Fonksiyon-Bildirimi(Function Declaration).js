// Fonksiyon Bildirimi(Function Declaration)
// Fonksiyon oluşturmak için fonksiyon bildirimi yapabiliriz. Mesela;

function mesajVer() {
alert( 'Herkese Merhabalar!' );
}
// function anahtar kelimesini takiben fonksiyon ismi ve parantez içerisinde parametreler(virgülle ayrılacak şekilde) ve son olarak da süslü parantez içerisinde fonksiyonun içereceği kod(ki bu bölüme fonksiyonun gövdesi(body) denir.) sırasıyla fonksiyonu oluşturur.

function isim(parametreler) {
// ...fonksiyonun gövdesi...
}
// Yukarıda bildirdiğimiz mesajVer fonksiyonu ismiyle çağrılabilir:

function mesajVer() {
alert( 'Herkese Merhabalar!' );
}
mesajVer();
mesajVer();
// mesajVer() çağrısı fonksiyonu çalıştırır. Burada mesajı iki kere çağırdığımız için mesajı iki defa göreceğiz. Yukarıdaki örnekten de görüldüğü üzere; fonksiyonların ana amacı kodu tekrar yazmayı engellemektir. Eğer fonksiyonun vereceği mesajı değiştirmek istiyorsak, bunu sadece fonksiyonun içerisinde(bir kez) yapmamız yeterlidir.

function mesaVer(ad, soyad) {
    alert(`Merhaba ${ad} ${soyad}`);
  }
  
  mesajVer("Arturo", "Kelesoglu", "Mr."); /* çıktı: Merhaba Arturo Kelesoglu (Bu örnekte parametrelere geçilen argüman sayısı 3'tür(Arturo, Kelesoglu, Mr.). Parametre sayısı ise 2'dir(ad,soyad). Bu yüzden fazlalıklar(Mr.) önemsenmez.*/
  mesajVer("Arturo"); /* çıktı: Merhaba Arturo undefined (Bu örnekte parametrelere geçilen argüman sayısı 1'dir.(Arturo). Parametre sayısı ise 2'dir(ad,soyad). Bu yüzden eksiklikler undefined döner. */
  mesajVer(); // çıktı Merhaba undefined undefined (Yukarıdaki örnekle aynı mantıktadır.)