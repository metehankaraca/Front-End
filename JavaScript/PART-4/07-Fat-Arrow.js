// Fat Arrow () => Fonksiyonu Kullanimi

function hello(firstName) {
    console.log(`Merhaba ${firstName}`)
}

hello('Javascript')

const helloFuncV1 = (firstName) => {console.log(`Merhaba ${firstName}`)}
helloFuncV1('helloFuncV1')

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`)
helloFuncV2('helloFuncV2')

const helloFuncV3 = (firstName, lastName) => console.log(`Merhaba ${firstName} ${lastName}`)
helloFuncV3('helloFuncV3', 'Last Name info')

const helloFuncV4 = (firstName, lastName) => {
    let info = (`Merhaba ${firstName} ${lastName}`)
    console.log(info)
    return info
}

helloFuncV4('helloFuncV4', 'Last Name info')

// Function declaration
function greet(who) {
    return `Hello, ${who}!`;
  }
  greet("John") // output : Hello, John!
  
  // Function expression
  const greet = function(who) {
    return `Hello, ${who}!`;
  }
   greet("John") // output : Hello, John!
  
const greet = (who) => `Hello, ${who}!`; // Fat arrow ile yazilma sekli

// Ornek Kullanimlar

// Ornek 1 *************************
// ES5
var toplam = function(x, y) {
    return x + y;
  };
  
// ES6
let toplam = (x, y) => x + y ;
  
// Ornek 2 *************************
// ES5
var sayi = function(x) {
    return x*x
};

// ES6
let sayi = x => x*x;

// Ornek 3 *************************
// ES5
var multiplier = function(item, multi) {
    return item * multi
};
multiplier(5, 2); // output : 10

// ES6
const multiplier = (item, multi) => item * multi;
multiplier(5, 2); // output : 10

// Ornek 4 *************************
//ES5
var myList = function(param1, param2) {
    return param1.concat(param2);
  };
  myList([1, 2], [3, 4, 5]); // output : [ 1, 2, 3, 4, 5 ]
  
  //ES6
  const myList = (param1, param2) => param1.concat(param2);
  myList([1, 2], [3, 4, 5]); // output : [ 1, 2, 3, 4, 5 ]
// Arrow fonksiyon kullanırken dikkat etmemiz gereken bazı durumlar vardır.

// "return" keyword;

// Statement'lar süslü{ } parantez kullanılarak yazılırlar. Eğer fonksiyon içerisinde bu parantezlerden varsa return keyword'ü kullanmamız gerekir. Bir if Statement'i kullanılan bir arrow fonksiyonu yazalım.
  var feedTheCat = (cat) => {
    if (cat === 'hungry') {
      return 'Feed the cat';
    } else {
      return 'Do not feed the cat';
    }
  }
// "this" keyword;

// this'in arrow fonksiyonlardaki davranışı, regular fonksiyonlardaki davranışından farklıdır. Nasıl ve nerede oluşturulursa oluşturulsun this'in arrow fonksiyonu içerisindeki değeri her zaman parent fonksiyonuna eşittir. Diğer bir deyişle arrow fonksiyonu kendi execution context'ini oluşturmaz. Yani kendisini referans göstermez, her zaman parent'ına bakar.
  
let movie = { 

name: "La la land",
    
thisInArrow:() => { 
     console.log("Movie name is " + this.name); // 'this' window'u referans gösterir. Bu yüzden name'yi bulamaz.
}, 
    
thisInRegular(){ 
    console.log("Movie name is " + this.name); // 'this' kendisini referans gösterir ve çalışır.
} 
};
movie.thisInArrow(); // output : Movie name is
movie.thisInRegular(); // output : Movie name is La la land



// Pekiştirme Soruları ***************************
// 1 -  Bir dizi veya film listesi parametre alan bir arrow fonksiyonumuz olsun, bunların hervbirini 1'den başlayarak alt alta yazalım.

// Çözüm
const seriesList = list => {
  
  list.forEach((series, index) => {
    console.log(`${index+1}. ${series}`) 
  });
};

seriesList(["Firefly", "The Mandalorian","Breaking Bad"]);
/* output:
1. Firefly
2. The Mandalorian
3. Breaking Bad
*/


//  2 - [1,2,3,4,5] array'ini parametre alan bir arrow fonksiyonumuz olsun. Bu array'in sonucu bize yeni bir array döndürsün. Oluşan yeni array'deki çift sayılar 2, tek sayılar ise 3 ile çarpılmış olsun. [1,2,3,4,5] => [1x3, 2x2, 3x3, 4x2, 5x3] =>Sonuç çıktımız **[3,4,9,8,15]** olacak.

// Cozum
const newArray = (nums) => {

    const newNums = nums.map(e=>{      
        if(e%2==0){
            return e*2
        }else if(e%2==1){
            return e*3
        }
    });
   return newNums 
}

console.log(newArray([1,2,3,4,5]));  // output: [3,4,9,8,15]