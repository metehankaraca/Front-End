// For Loop

for(let i = 0; i < 10; i++) {
    console.log(i);
}

let toplam = 0
for (let i = 0; i <10; i++) {
    toplam += i
    console.log(toplam)
}

console.log("*********************")

let sayilar = [1,3,5,8,4,5,3,2,]
// console.log(sayilar[0] + sayilar[1] + sayilar[2] + sayilar[3]...)

for (let i = 0; i < sayilar.length; i++) {
    toplam += sayilar[i]
}
console.log(toplam)


// for(let i in sayilar){
//     toplam += sayilar[i]
// }
// console.log(toplam)

for (let sayi of sayilar){
    toplam += sayi
}
console.log(toplam)

// Object ile for kullanimi
console.log("Object ile for kullanimi")

let user = {
    "name": "Mete",
    "last": "Karaca",
    "age": 26,
    "address": {
        "country": "turkiye",
        "city": "bursa"
    },
    "hobbies": ["spor","sinema"]
}

for (let key in user){
    console.log(key)
    console.log(user[key])
}