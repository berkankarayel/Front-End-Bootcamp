//  Set Nedir?
//*Amaç: Unique (benzersiz) değerler koleksiyonu oluşturmak için kullanılır.
//? Özellikleri:

//! Aynı değeri birden fazla kez içermez.
//!Değerler sıralıdır ve iterable'dır.
//!em primitive hem de referans türlerini depolayabilir.

// Set oluşturmak için Set yapıcı fonksiyonu kullanılır.

const numbers = new Set([1, 2, 3, 4, 4]);
console.log(numbers); // Set(4) { 1, 2, 3, 4 }

// Dizi içindeki tekrar eden 4 sadece bir kez eklenir.

//* Set Metodları ve Özellikleri

//?1- .add(value):
// Set'e yeni bir değer ekler.

const mySet = new Set();
mySet.add(10);
mySet.add(20);
console.log(mySet); // Set(2) { 10, 20 }

//? 2-has(value):
//Bir değerin Set içinde olup olmadığını kontrol eder.
console.log(mySet.has(10)); // true
console.log(mySet.has(30)); // false

mySet.delete(10);
console.log(mySet); // Set(1) { 20 }

mySet.clear();
console.log(mySet); // Set(0) {}
//*.size:
// Set içindeki eleman sayısını döner.
console.log(mySet.size); // 0


//Set Kullanım Alanları
// Tekrarlayan Değerleri Kaldırma:

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); // [1, 2, 3, 4, 5]

const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection); // Set(2) { 2, 3 }


const union = new Set([...setA, ...setB]);
console.log(union); // Set(4) { 1, 2, 3, 4 }

const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference); // Set(1) { 1 }

//?  Set Avantajları:

// Tekrarlayan değerleri engeller.
// Eleman ekleme ve kontrol işlemleri hızlıdır.
// Kullanım Alanları:
// Benzersiz listeler.
// Küme işlemleri.
// Veriyi filtrelemek ve temizlemek.
// Önemli Metodlar:
// add, has, delete, clear, size.
// Bu bilgilerle Set kullanımı hem teorik hem de pratik açıdan kolayca anlaşılabilir

