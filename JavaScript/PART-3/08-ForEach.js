// forEach
// JavaScript'te forEach , döngü oluşturmamızı ve bu döngüyü sırayla çalıştırmamızı sağlayan bir array metodudur.

arr.forEach(function(value, index, array) {
    //index ve array kullanmak opsiyoneldir.
})


const animals = ["cat" , "dog" , "bird", "horse"];
  
animals.forEach((value , index , array) => {
  console.log('value: ', value );
  console.log('value parametresinin aldığı index :', index );
  console.log('array:' , array );
});

const animals1 = ["cat" , "dog" , "bird", "horse"];
animals.forEach( animal => console.log( animal ) );
//Arrow function gosterimi(ES6)

const numbers = [4, 11, 9];
const newArray = [];

numbers.forEach(function(numbers){
  newArray.push(numbers*3);
});
console.log(newArray);

// output = [12, 33, 27]

