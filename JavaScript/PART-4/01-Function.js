// Fonksiyonu Adlandırmak
// İlk olarak function ibaresinden sonra fonksiyon adı yazılır. Bir fonksiyonu adı varsa bunlara Normal-Adlandırılmış Fonksiyonlar (Regular/Named Functions) deriz.
// Burada önemli olan kodun okunabilirliği açısından fonksiyonu işlevine uygun bir biçimde adlandırmaktır, dahası bu bir işlevi belirttiği için fonksiyon adımız bir eylem olmalıdır. Bunun için bazı ön ekler kullanabiliriz.
// Örneğin değer almak istediğimiz bir fonksiyon adında ön ek olarak get kullanabiliriz.
// Bununla birlikte şunu da unutmamalıyız istendiğinde adı olmayan anonim bir fonksiyon da kullanılabilir. Aşağıda bu fonksiyon türünden bahsediliyor :wink:
// Fonksiyon Parametreleri ve Gövdesi
// Sonrasında parantezler içinde alacağı parametreler belirlenir. Parametre olması zorunlu olmadığı gibi fazla parametre geçmek kodun okunurluğunu bozabilir.
// Parametre alan fonksiyonları kullandığımız zaman o parametrelere kendimiz bir değer atarız. Atanan bu değere argüman adı verilir.
function printHello(name){                		 //name adında bir parametre aldı
        console.log('Merhaba' + name);  	
}
printHello('Mete');  // bir argüman vererek fonksiyonu çağırdık. Çıktı: Merhaba Şafak

// Son olarak da süslü parantezleri açarak içine çalışmasını istediğimiz JavaScript kodunu eklenir. Bu JavaScript koduna fonksiyonun gövdesi- body denir.
// Örneğin aşağıdaki fonksiyonunun amacı bizden iki adet değer aldıktan sonra o değerlerin toplamını konsola yazdırmak:

function addition(sayi1,sayi2){  //function name and parameters
        console.log(sayi1+sayi2);     //body
}
// Bu kodda fonksiyonunun adı addition. sayi1 ve sayi2 fonksiyonunun almış olduğu parametreler oluyor. Fonksiyonun işlevi ise body kısmında console.log(sayı1+sayı2) belirtilmiş.

// Yukarıda fonksiyonu adlandırmadan da kullanabileceğimizden bahsetmiştik: Anonim fonksiyonların (Anonymous Functions) bir adı yoktur ve bir değişkene atanarak yeri geldiğinde kullanılırlar.
// Değişken adı kullanılarak çağrıldıkları için birden çok anonim fonksiyonu aynı dizide kullanabilirsiniz.
// Dahası bir değişkene atandıklarından bu değişkeni başka bir fonksiyonun parametresine koyarak callback (geri arama) yapabilirsiniz.
var add = function (sayi1,sayi2){  //Anonim bir fonksiyon oluşturduktan sonra bu 
                                   //fonsksiyonu bir değişkene atadık
        console.log(sayi1+sayi2);
}


function yasHesapla(dogumYili){
        return new Date().getFullYear() - dogumYili
}
let ahmetYas= yasHesapla(1986)
let ayseYas= yasHesapla(1980)
console.log(ahmetYas, ayseYas)
      
      
      
function emeklilikNeZaman(dogumYili, isim) {
        let yas = yasHesapla(dogumYili)
        let kalan_sene = 65 - yas

        if (kalan_sene > 0) {
                console.log(`${isim}, Emekli olmaniza ${kalan_sene} yil kaldi`)
        } else {
                console.log("Emeklisiniz.")
        }
}
emeklilikNeZaman(1970, 'Ali')