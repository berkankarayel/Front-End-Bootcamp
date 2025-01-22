//Spread Operatörü (...) Nedir?:

// Spread operatörü, bir diziyi veya nesneyi genişletmek ve elemanlarını (veya özelliklerini) başka bir yapıya yaymak için kullanılır. Aşağıda farklı kullanım alanlarını ele alıyoruz.

//? 1. Dizilerde Spread Kullanımı:

// a. Dizi Elemanlarını Genişletme
// Bir diziyi başka bir dizinin içine genişletmek veya yeni bir dizi oluşturmak için kullanılabilir.

const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6];

console.log(moreNumbers); // [1, 2, 3, 4, 5, 6]


//?.2 Dizilerin Birleştirilmesi : Birden fazla diziyi tek bir dizide birleştirmek için kullanılır.


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]


//c. Dizinin Kopyalanması:

const original = [1, 2, 3];
const copy = [...original];

console.log(copy);       // [1, 2, 3]
console.log(original === copy); // false (İkisi farklı referanslar)

// 2. Nesnelerde Spread Kullanımı
// Spread operatörü, nesnelerde özellikleri birleştirmek veya genişletmek için de kullanılabilir.

// a. Nesne Özelliklerini Genişletme
// Bir nesnenin özelliklerini başka bir nesneye yayabilirsiniz.

const person = { name: 'Ali', age: 25 };
const extendedPerson = { ...person, city: 'Istanbul' };

console.log(extendedPerson);
// { name: 'Ali', age: 25, city: 'Istanbul' }


const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const combined1 = { ...obj1, ...obj2 };
console.log(combined1);
// { a: 1, b: 3, c: 4 } 


function sum(a, b, c) {
    return a + b + c;
}

const numbers2 = [10, 20, 30];
console.log(sum(...numbers2)); // 60


const defaults = { fontSize: 14, color: 'black' };
const userSettings = { color: 'blue', fontFamily: 'Arial' };

const finalSettings = { ...defaults, ...userSettings };

console.log(finalSettings);
// { fontSize: 14, color: 'blue', fontFamily: 'Arial' }


//? Özet
//! Spread Operatörü (...):

// Dizileri genişletmek, kopyalamak veya birleştirmek için kullanılır.
// Nesnelerin özelliklerini yaymak, birleştirmek veya kopyalamak için kullanılır.Fonksiyonlara dinamik ve esnek argümanlar geçirmek için kullanılır.
