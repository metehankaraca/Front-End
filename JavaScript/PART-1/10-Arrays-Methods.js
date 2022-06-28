// Arrays (Diziler) ve Dizi Methodlari

// let urun1 = "iphone 11"
// let urun2 = "iphone 12"
// let urun3 = "iphone 13"

let urunler = ["iphone 11", "iphone 12", "iphone 13"];
let fiyatlar = [9000, 13000, 20000]
let renkler = ["gold","white","black"]

console.log(urunler[0])
console.log(fiyatlar[0])
console.log(renkler[0])

console.log(`${urunler[0]}-${fiyatlar[0]}-${renkler[0]}`)
console.log(`${urunler[1]}-${fiyatlar[1]}-${renkler[1]}`)
console.log(`${urunler[2]}-${fiyatlar[2]}-${renkler[1]}`)


let urun1 = ["iphone 11", 9000, "gold"]
let urun2 = ["iphone 12", 15000, "white"]
let urun3 = ["iphone 13", 20000, ["siyah","beyaz","mavi"] ]

console.log(urun3[0][1])


let urun4 = []
urun4[0] = "iphone 13 pro max"
urun4[1] = 26000
urun4[2] = "dark blue"

console.log(urun4)


let kursAdi = "Front-End Developer Egitimi";
console.log(kursAdi[4]);
console.log(kursAdi.split(" ")[3]);

/////////////////////////////////////////////////////////
// Dizi methodlari
console.log("************************ Dizi Methodlari ************************")

let ogrenciler = ["cinar","yigit","ata"];

// Array to string
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" ")

// eleman silme
sonuc = ogrenciler.pop(); // Son elemani siler
sonuc = ogrenciler.shift(); // Ilk elemani siler

// eleman ekleme
sonuc = ogrenciler.push("murat"); // dizinin sonuna eleman ekler
sonuc = ogrenciler.unshift("ayse"); 

console.log(sonuc)
console.log(ogrenciler)

let markalar1 = ["mazda", "toyota"]
let markalar2 = ["opel", "renault"]
let markalar3 = ["ford"]

sonuc = markalar1.concat(markalar2) // array birlestirme
console.log(sonuc)