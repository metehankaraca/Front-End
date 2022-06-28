// DOM icerisinden Etiket ve ID ile Oge Secimi
// getElementById
// querySelector


// let h2 = document.getElementsByTagName('h2')
let title = document.getElementById('title')
title.innerHTML = "Degisen Bilgi"
console.log(title.innerHTML) 


// querySelector
let link = document.querySelector("#link-adres")
link.innerHTML += " degisti."
link.style.color = "red"
link.classList.add('btn')
console.log(link)