// String Veri Islemleri

let email = "deneme123@gmail.com"
let firstName = "Mete"
let lastName = "Karaca"

// string karakter sayisi -> length
console.log(email.length)

// Ilk karakteri bulmak -> [0]
console.log(firstName[0])
console.log(firstName[1])
console.log(firstName.charAt(2))

// buyuk harf / kucuk harf
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

// string icinde istenilen bilgiyi aramak ve yerini gostermek -> search
console.log(email.search("@"))
console.log(email[9])

// belli bir parcayi alma -> slice
console.log(email.slice(1,10))
let DOMAIN = email.slice(email.search("@") + 1)
console.log(DOMAIN)

// Bilgiyi degistirmek - guncellemek -> replace
console.log(lastName.replace("Karaca","krc"))

// istenilen bilgi -> includes
console.log(email.includes("@"))

// istenilen bilgiyle basladi mi kontrolu -> startsWidth, endsWidth
console.log(firstName.startsWith("M"))
console.log(firstName.endsWith("e"))

// Ilk harfleri buyuk yapma

// Metin birlestirme
console.log(firstName.concat(' ', lastName))

// Index numarasina gore karakterin unicode degerini bulma
console.log(firstName.charCodeAt(1))

// Metni diziye cevirme
var name = "ahmet,mehmet"
var names = name.split(',')

console.log(names)