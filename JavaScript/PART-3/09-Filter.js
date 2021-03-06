// Filter Metodu
// Bir Array metodu olan filter(), dizi elemanlarını döngüye alıp, istediğimiz koşula sahip olanlarla yeni bir dizi oluşturmak için kullanılır.

const products = ["Mikrofon","Kablo","Telefon","Bilgisayar","Mouse","Klavye","Ekran"]
// Yukarıda products dizisinden, harf sayısı 5'ten fazla olanları almak istiyorum.

const newProducts = products.filter(eleman => eleman.length > 5)
console.log(newProducts); //["Mikrofon", "Telefon", "Bilgisayar", "Klavye"]
// Yukardaki örnekte harf sayısı 5'ten fazla olan elemanları filter() metodu ile filtreleyip, newProducts adında oluşturduğum yeni diziye atadım.


const users = [
	{fullName: "Mehmet Veli", isActive: false},
	{fullName: "Ali Duran", isActive: true},
    {fullName: "Ahmet Yılmaz", isActive: true},
    {fullName: "Oğuz Şahin", isActive: false},
]
// Yukardaki users dizisindeki nesneler içerisinden isActive'i true olanları almak istiyorum.

const activeUsers = users.filter(user => user.isActive === true);
console.log(activeUsers.fullName); //(2)[{...},{...}] (Ali Duran, Ahmet Yılmaz)
//Üst satırdaki sonuç bize, elemanları nesne olan 2 elemanlı bir dizi olduğunu söylüyor.