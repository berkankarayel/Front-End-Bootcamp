let arabalar = ["bmw", "toyota", "reanult", "mercedes", "porsche"]

let arabalar2 = ["tofaş"]


//! push : dizinin sonuna eleman ekler 

arabalar.push("toros") // sonuna toros eklendi

//! unshift : dizinin basına eleman ekler

arabalar.unshift("hundai") // başına ekledik


//! pop : dizinn sonunda eleman siler. 

arabalar.pop() // son elemanı kaldırır

arabalar.shift() // dizin başından eleman siler


//! splice : eleman eklemek ve silmek için kullanılır

arabalar.splice(0, 0, "tesla")
console.log(arabalar) // 0. indekse  hiç eleman silmeden toyota koyar


//! ToString : diziyi stringe çevirir

let Arabalar = arabalar.toString()
console.log(typeof Arabalar)


//! join :  diziyi stringe değiştiri elanların arasına iseiğdimiz şeyi koyar .

let a = arabalar.join("-")
console.log(a)


//! concat : Birleştirme 


let birlesmisdizi = arabalar.concat(arabalar2) // iki dizi 
// birleştirdik.

console.log(birlesmisdizi)


// Slice metot:
console.log(arabalar)
let ayriDizi = arabalar.slice(2)
console.log(ayriDizi)


// IndexOf : eleman var mı yokmu bakar
//! içinde varsa : 0 döner 
//! içinde yoksa -1 döner

let index = arabalar.indexOf("bmw")
console.log(index)

