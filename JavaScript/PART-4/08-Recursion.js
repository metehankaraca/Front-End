// Recursion
// Direkt örnek vererek açıklamak gerekirse, yapmamız gereken bir task var diyelim ve biz bu task'i birden fazla parçaya ayırıp daha basit halde yazmak istersek 
// veya bu task'ı aksiyon alacak bir fonksiyona ve bu task'i daha basit bir task'e dönüştürmek istersek veya belirli bir data yapısı ile ilgileniyorsak, 
// recursion bu noktada bize yardımı dokunabilecek bir programlama pattern'idir diyebiliriz.

// Bir fonksiyonu çağırdığımız zaman o fonksiyon bir çok fonksiyonu daha çalıştırabilir. Kısaca bir fonksiyon kendisini tekrar çağırıyor ise biz buna recursion diyoruz.

// bir fonksiyon yazalım bu fonksiyon sayının kuvvetini alsın.
// pow(2,2) = 4
// pow(2,3) = 8
// pow(2,4) = 16 değerlerini verecek şekilde diyelim.

// 1.ci yol (recursion patterni ile düşünmeden)
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

alert(pow(2, 3)); // 8
// recursion ile
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert(pow(2, 3)); // 8
// Aslında burada biz pow fonksiyonunu 2 ye ayırıyoruz. Eğer n==1 ise işlem oldukça açık direkt bize x i verecek. 
// Diğer türlü ise, fonksiyon n==1 olana kadar kendisini çağırıp en basit haline ulaşınca, bize sonucu döndürmektedir.

pow(2,4) = 2 * pow(2,3)
pow(2,3) = 2 * pow(2,2)
pow(2,2) = 2 * pow(2,1)
pow(2,1) = 2
// Sonuç olarak recursion, bir fonksiyonu en basit haline kadar getiriyor. Sonuç en açık hale gelene kadar.

//Aşağıdaki soruyu recursion ile arrow function ve if else clause kullanarak yeniden nasıl yazarız
function pow(x, n) {
  return n == 1 ? x : x * pow(x, n - 1);
}