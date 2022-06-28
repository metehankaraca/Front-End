// Liste icindeki ogelere erismek ve yeni oge eklemek

let lastChild = document.querySelector("ul#liste>li:last-child")
lastChild.innerHTML = "Son oge degisti."

let firstChild = document.querySelector("ul#liste>li:first-child")
firstChild.innerHTML = "Ilk oge degisti."

let ulDOM = document.querySelector("ul#liste")
let liDOM = document.createElement('li')
liDOM.innerHTML = "JS DOM ile olusturulan oge"
ulDOM.append(liDOM) // En sona ekler
ulDOM.prepend(liDOM) // En basa ekler
