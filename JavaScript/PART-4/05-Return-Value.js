// Geri Dönüş Değeri (Return Value)
// Bir fonksiyon return anahtar kelimesi kullanılarak sıfır ya da bir döndürülebilir.

function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
};

var sonuc = topla(10,20); //  30 döner.

function carp(sayi1, sayi2) {
sayi1 * sayi2;
};

result=carp(10,20); // undefined 
// Ek olarak "topla" fonksiyonu iki değerin toplamını geri döner. "carp" fonksiyonunda ise return anahtar kelimesi kullanılmadığı için geri dönüş değeri yoktur,dolayısıyla "undefined" döner.

var ekle = function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
};

var sonuc1 = ekle(10,20); 
var sonuc2 = topla(10,20); // geçersiz


function Question(hobby) {
    switch (hobby) {
      case "car":
        return function (name) {
          console.log(name + " do you have a car ?");
        };
        break;
  
      case "book":
        return function (name) {
          console.log(name + " what is your favorite author?");
        };
        break;
  
      case "software":
        return function (name, type) {
          console.log(name + " are you interested in " + type + "?");
        };
        break;
  
      default:
        return function (name) {
          console.log(name + "  how are you ?");
        };
        break;
    }
  }
  
  var softwareQuestion = Question("software");
  softwareQuestion("Cemre","nodejs");