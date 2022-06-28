// Variable Scope, Closure
// Bir fonksiyonu istediğiniz bir an yaratabilir, başka bir fonksiyona parametre olarak girebilir ve yazdığımız programın çok farklı bir yerinde biz tekrar bu fonksiyonu çalıştırabiliriz. 
// JavaScript function-oriented bir dil olduğundan bize bir çok özgürlük sağlar.

// Bir fonksiyonun dışında tanımlanan değişkenlere erişebildiğiniz biliyoruz. 
// Peki bir fonksiyonu biz yarattık ve global tanımlanan var x = 5 bu fonksiyon içerisinde eriştik ve kullandık diyelim. 
// Peki bu değişkenin değeri daha sonra değişirse fonksiyon güncel olanı alacak mı veya biz bu fonksiyonu başka bir fonksiyona parametre olarak girdiğimiz zaman hala sağlıklı bir şekilde x e ulaşabilecek mi?

// Not: JavaScript de biz bir değişken atarken 3 farklı yol kullanabiliyoruz. var ve modern olanlar(let,const). Bu bölümde modern olanlardan konuşacağız.

// Code Blocks
// Eğer bir değişkeni bir code bloğu içerisinde tanımlarsak {...}, o değişken sadece bu code block arasında ulaşılabilir olur.

//Deneyip sonuçları görebilirsiniz.
{
  let message = 'Merhaba';
  console.log(message);
}
console.log(message); // ??
//Deneyip sonuçları görebilirsiniz.
{
  let message = 'Merhaba';
  console.log(message);
}

{
  let message = 'Hello';
  console.log(message);
}
// Kod blokları kullanmadan da deneyebilirsiniz.
// If, for, while gibi döngüler de değişkenleri code block'larında tanımlar ve sadece orada ulaşılabilirler.
 
if (true) {
    let message = 'Merhaba';
    console.log(message);
  }
  console.log(message);

// Bir fonksiyon yazdığımızı düşünelim ve bu fonksiyon dışardan aldığı bir string parametresini içerisinde 2 ye ayırsın ve bir koşula göre bize çıktı versin.
function stringFormat(str) {
    {
      let part1 = str.slice(0, 3);
      let part2 = str.slice(3);
      str = part1.toUpperCase() + part2;
    }
    //part1 ve part2 kullanılamaz.
    //bir kosula baglı return edelim. basit olması acısından sadece true yazdım.
    if (true) {
      return str;
    }
    return str.slice(4);
  }