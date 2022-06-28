// Arrow Functions
// Fonksiyon yaratmanın bir diğer yolu ise ES6 ile birlikte hayatımıza giren, daha okunabilir daha basit bir syntax yapısına sahip olan arrow functions yapısıdır.

let func = (param1, param2, param3) => expression;
// Yukarıdaki kod bloğu basitçe, bir param1,param2,param3 parametrelerini alan ve sağ taraftaki ifadeyi değerlendirip sonucunu döndüren bir fonksiyon oluşturur.

// Aslında aşağıdaki kod bloğu ile aynı işi yapmamaktadır.

let func1 = function (param1, param2, param3) {
  return expression;
};

const carpim = (sayi1, sayi2) => sayi1 * sayi2;
/*
    // Daha uzun hali ise;
    const carpim = function(sayi1,sayi2){
      return sayi1 * sayi2;
    }
  */

console.log(carpim(3, 5));
// Yukarıda yazdığımız fonksiyon , 2 tane parametre alıp, console.log içerisinde fonksiyonu çağırdıktan sonra parametrelerin çarpımlarının değerini döndürmektedir. Eğer sadece tek bir parametre alması gereken bir fonksiyon yazsa idik, mesela girilen değerin karesini döndüren bir fonksiyon, arrow function syntax'ini şu şekilde de yazabilirdik.

const karesiniAl = (sayi) => sayi * sayi;
//Hiç parametre olmadığı zaman ise
const helloWorld = () => console.log('Hello World');
// Bir koşula göre iki farklı fonksiyon çalıştırmanız gerektiğini düşünün. Dinamik olarak fonksiyon tanımlamayı aşağıdaki şekilde yapabiliriz.

let experience = prompt('Kac yillik gelistirici tecrubeniz var', 4);

const developer =
  experience < 5
    ? () => alert('Bir cok konuyu biliyorum')
    : () => alert('Hicbir sey bilmiyorum:)');

developer();
// Bir satıra sığabilecek basitlikte olmayan fonksiyonlarımız için çok satırlı arrow function'ı şu şekilde yazabiliriz.

// parantezler bize birden fazla statement yazmamızı sağlar.
let toplam = (a, b) => {
  let result = a + b;
  return result;
};