// DOM'a CSS Class Bilgisi Eklemek ve Cikarmak

let greeting = document.querySelector("#greeting")
greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info","second-class","third-class") // birden fazla eklemek

greeting.classList.remove("title")
greeting.classList.remove("second-class","third-class") // birden fazla cikarmak
console.log(greeting.classList)