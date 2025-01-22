// map() Nedir?
//!Amaç: Bir dizideki her bir eleman üzerinde işlem yaparak yeni bir dizi oluşturur.

//?Değiştirir mi?: Orijinal diziyi değiştirmez; her zaman yeni bir dizi döner.
// Nerede Kullanılır?: Elemanları dönüştürmek veya düzenlemek için.



// yapısı : 
const newArray = array.map((element, index, array) => {
    // İşlemler
    return değer;
});

//! Parametreler:
//element: Mevcut eleman.
//index (isteğe bağlı): Mevcut elemanın indisi.
// array (isteğe bağlı): Orijinal dizi.


const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16]



//!Nesne İçeriklerini Güncellemek:

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
];

const updatedUsers = users.map(user => ({
    ...user,
    isActive: true,
}));

console.log(updatedUsers);
// [
//   { name: "Alice", age: 25, isActive: true },
//   { name: "Bob", age: 30, isActive: true }
// ]

const words = ["hello", "world"];
const upperWords = words.map(word => word.toUpperCase());
console.log(upperWords); // ["HELLO", "WORLD"


//! 4. map() ve Döngüler Arasındaki Fark

//Döngüler (for veya forEach): Orijinal dizi üzerinde işlem yapar ama yeni bir dizi döndürmez.
//? map(): Yeni bir dizi oluşturur ve döner.

const nums = [1, 2, 3];

// foreach 

let result = [];

nums.forEach(num => result.push(num * 2));
console.log(result);


// map ile 

const doubled = nums.map(num => num * 2);
console.log(doubled);


//! Özet:
// map(), bir diziyi dönüştürmek için kullanılır.

// Orijinal dizi değişmez; her zaman yeni bir dizi döner.

// Kullanım Amacı: Dizi elemanlarını değiştirmek, hesaplamak veya yeniden yapılandırmak.