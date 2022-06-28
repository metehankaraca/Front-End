var isim = "Ahmet"  // global scope

function yazdir() {
    var isim = "Ayse"
    var yas = 20
    console.log("function scope:", isim, yas)
}
yazdir()
console.log(isim)
console.log(yas) // yas degiskeni function icinde olusturuldugu icin global de ulasilamaz ve hata verir.

// if - for bloklarinda tanimlanan degiskenler globali etkiler. block icerisinde yeni bir scope olusmaz.
// fonksiyonlar kendi scope alanlarini olusturur.
