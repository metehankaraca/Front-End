// Objects

// dict, json

let user1 = {
    "name": "Mete",
    "last": "Karaca",
    "age": 26,
    "address": {
        "country": "turkiye",
        "city": "bursa"
    },
    "hobbies": ["spor","sinema"]
}

let user2 = {
    "name": "Mete",
    "last": "Karaca",
    "age": 26,
    "address": {
        "country": "turkiye",
        "city": "bursa"
    },
    "hobbies": ["spor","sinema"]
}

let sonuc;
sonuc = user1.name
sonuc = user1.last
sonuc = user1["age"]
sonuc = user1.address.city
sonuc = user1.address.country
sonuc = user1.hobbies[0]
sonuc = user1.hobbies[1]


let kullanicilar = [
    user1,
    user2
]

sonuc = kullanicilar[0]
sonuc = kullanicilar[1]

let urunler = [
    {
        "urun_adi": "samsung_note10",
        "urun_fiyat": 14000
    },
    {
        "urun_adi": "iphone 13",
        "urun_fiyat": 26000
    }
]

sonuc = urunler[0]
sonuc = urunler[1]
console.log(sonuc)