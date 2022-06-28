// While Döngüsü
// JavaScript’te tekrar eden işlemlerde kodlarımızın karışmasını önlemek ve okunabilirliği artırabilmek için döngüler kullanırız. Bunlardan bir tanesi While döngüsüdür. While döngüsü oluşturabilmek için ilk olarak parametre olarak bir koşul vermemiz gerekmektedir verdiğimiz koşul sağlandığı sürece döngü devam eder. Bu koşul sınırsız olursa döngü de sonsuz kere devam eder ve biz bunu istemeyiz genel olarak sonlanacağı bir durumla döngü sonlandırılmalıdır.

// Bunu ilk olarak sözde kod (pseudocode) olarak gösterebiliriz.
// Burada while döngüsünün yazılış şeklini gördük şimdi bunu daha gerçekçi bir durumda basitçe inceleyebiliriz. Diyelim ki bir durumda konsola 1’ den 10’a kadar sayıları sırayla yazdırmamız gerekiyor biz bu durumda while döngüsünü kullanarak satırlarca kod yazmaktan kurtuluruz ve okunması gayet basit bir kod yazmış oluruz.

var degisken = 1;
while (degisken <= 10){
    console.log('degiskenin degeri: ' + degisken)
    degisken++;
}

var arabalar = ['Honda', 'Mercedes', 'BMW', 'Fiat', 'Renault'];
var i = 0;
while (arabalar[i]) {
    console.log(arabalar[i]);
    i++;
}