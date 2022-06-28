// IF - ELSE Kosul Yapisi

let username = prompt("Kullanici Adinizi Giriniz: ")
if (username.length > 0) {
    console.log(`Kullanici Adiniz: ${username}`)
} else {
    console.log("Bilgi girilmedi")
}

// Coklu Kosul Kullanimi

let userName = prompt("Kullanici Adiniz:")
let age = prompt("Yasinizi Giriniz:")
let info = document.querySelector('#info')

if (userName && age >= 18){
    info.innerHTML = "Ehliyet Almak Icin Uygunsunuz."
} else if (!userName) {
    info.innerHTML = "Lutfen Kullanici Adinizi Giriniz."
} else if (!(age >= 18)) {
    info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz.."
}

// 1.Örnek: İki sayıdan büyük olanı bulalım:
var x = 5;
var y = 7;

if(x > y) {
    console.log(x + " sayisi" + y + " sayısından büyüktür." );
} else {
    console.log(y + " sayisi" + " " + x + " sayısından büyüktür.");
}

// 2.Örnek: Vize ve final notları belli olan bir öğrencinin yıl sonunda dersten geçip geçmediğini hesaplayalım:
Şartlar:
// Öğrencinin vize notunun %30'unu final notunun %70'ini alalım.
// Vize ve final notunun toplamından doğan not ortalaması eğer 0-30 aralığındaysa KALDINIZ (FF) yazdıralım.
// 31-49 aralığındaysa DC - KOŞULLU yazdıralım.
// 50- 84 aralığındaysa CC - GEÇTİNİZ! yazdıralım.
// 85-100 aralığındaysa Notunuz AA yazdıralım.

var ogrVizeNot = 45; // Bu kod satırını değiştiriniz. 
var ogrFinalNot = 60; // Bu kod satırını değiştiriniz. 
var ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);

if(ogrOrtalama >= 0 && ogrOrtalama <= 30) {
  console.log("Not ortalamanız: " +ogrOrtalama + " KALDINIZ(FF).");
} else if (ogrOrtalama >= 31 && ogrOrtalama <= 49) {
  console.log("Not ortalamnız: " +ogrOrtalama + " DC - KOŞULLU ");
} else if (ogrOrtalama >= 50 && ogrOrtalama <= 84) {
  console.log("Not ortalamnız: " +ogrOrtalama + " CC - GEÇTİNİZ ");
} else if (ogrOrtalama >= 85 && ogrOrtalama <= 100) {
  console.log("Not ortalamnız: " +ogrOrtalama + " AA - GEÇTİNİZ ");
}


// 3.Örnek Tahmin Oyunu: Bilgisayar tarafından 10 'a kadar tutulmuş olan rastgele sayıyı bulalım:
var randomSayi = Math.floor(Math.random() * 10);
//Girdiğimiz sayıyı aklında tutması için prompt değişkene atanır
var tahmin = prompt("Bir sayı gir ve rastgele sayıyı bulmaya çalış!");
if (tahmin == randomSayi && tahmin != null) alert("Bildin!!!");
else if (tahmin == "") alert("Boş giriş yaptınız!");
else if (tahmin == null) alert("Giriş yapmaktan vazgeçtiniz!");
else {
  alert("Yanlis Tahmin, Random sayi: " + randomSayi);
}


// 4.Örnek Verilen formüle göre vücut kitle indeksi hesaplayan ve hesapladığı değere göre yazı yazan bir program yazalım. Programda yazılmış kısımları okuyup eksik kısımları tamamlayın.
// Fonksiyon parametreleri prompt ile kullanıcıdan alınmalı.

// Formül: vki = kg/(m * m)

// İstenilenler:
// Prompt ile kullanıcıdan bilgi almak
// Verilen formülü uygun yere yazmak
// Formülde metre cinsinden istendiği için diyalog kutucuğuna metre cinsinden örnek 1.66 yazarak kullanıcıya rehberlik etmek

var weight = prompt("Boyunuzu metre cinsinden giriniz:","Ornek: 1.80")
var height = prompt("Kilonuzu giriniz", "Ornek: 80")

function vkiHesapla(weight, height) {
  var vki = (height / (weight * weight));

if(vki<18.5) return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);
if(vki>= 18.5 && vki <= 24.9) return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);
if(vki>= 25.0 && vki <= 29.9) return alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);
if(vki>= 30) return alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);
return alert("Girdiğiniz değerleri kontrol ediniz");
};
vkiHesapla(weight, height);
console.log(vkiHesapla)