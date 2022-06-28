// Nested Functions
// Nested Functions ( İç içe fonksiyonlar ) JavaScript'te yaygın olarak kullandığımız bir yapı. Bir Fonksiyon içerisinde başka bir fonksiyonu tanımladığımız zaman buna nested functions yapısı diyoruz aslında.

function programDetayi(bootcamp, organizasyon) {
  // nested yardımcı fonk
  const tumProgram = () => bootcamp + ' ' + organizasyon;

  console.log('Basladi, ' + tumProgram());
  consol.log('Bitti, ' + tumProgram());
}
// tumProgram fonksiyonu dış değişkene ulaşabilir ve gerekli bilgileri return eder. Daha ilginç olarak da bir fonksiyon nested fonksiyonu da return edebilir. Bir sayaç üzerinde bunu anlayabiliriz.

function sayacartir() {
  let sayac = 0;

  return function () {
    return sayac++;
  };
}

let counter = makeCounter();

console.log(sayacartir()); // 0
console.log(sayacartir()); // 1
console.log(sayacartir()); // 2