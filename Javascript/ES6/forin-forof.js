// for...in Döngüsü: 

//? Amaç: Bir nesnenin anahtarlarını (keys) dolaşmak için kullanılır.

//! Nerede Kullanılır: Nesnelerde veya dizilerin indislerini almak için.

// yapısı : 
for (let key in object) {
    // key: Nesnenin anahtarı
    // object[key]: Anahtara ait değer
}

const user = { name: "Alice", age: 25, job: "Developer" };

for (let key in user) {
    console.log('${key}:  ${user[key]} ');
}
// Çıktı:
// name: Alice
// age: 25
// job: Developer



//2 -) for...of Döngüsü:

//!Amaç: Bir iterable'ın (dizi, string, Map, Set vb.) değerlerini dolaşmak için kullanılır.

//?Nerede Kullanılır: Diziler, stringler, Map ve Set gibi iterable'larda.

// yapısı: 
for (let value of iterable) {
    // value: Döngüdeki her bir değer
}

const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}
// Çıktı:
// red
// green
// blue



//! Örnek: for...in ve for...of Farklılıkları

const arr = ["a", "b", "c"];


// for...in
for (let index in arr) {
    console.log(index); // 0, 1, 2 (indisler)
}


// for...of
for (let value of arr) {
    console.log(value); // a, b, c (değerler)
}