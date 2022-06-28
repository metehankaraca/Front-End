// Template Literals Kullanimi

// Degisken birlestirme
let username = "mete"
const DOMAIN = "github.com"

let email = username + "@" + DOMAIN
console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email)


// Template literals kullanimi
let info = `
Merhaba ${username} sitemize hosgeldin. Mail adresin: ${email}

mail adresinin uzunlugu: ${email.length}
gunun saat bilgisi: ${new Date().getHours()}
`
console.log(info)


// HTML Sablonlari
const ad = `Mete`
const soyad = `Karaca`
const gozRengi = `siyah`

// → Eski kullanım, Template Literals kullanmadan:

const kisi = "<p>"+ad+"</p>"+
              "<p>"+soyad+"</p>"+
              "<p>"+gozRengi+"</p>"

document.body.innerHTML = kisi;

// →Yeni kullanım, Template Literals kullanarak:

const kisi1 = `
<p>${ad}</>
<p>${soyad}</>
<p>${gozRengi}</>
`;

document.body.innerHTML = kisi1;