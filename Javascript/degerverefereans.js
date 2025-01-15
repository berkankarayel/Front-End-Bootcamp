// değerer ve referans veri tipleri


//! İlkel ( primitive ) veri tipleri :


//? String-Number-Boolean-Undefined-NULL-sYMBOL


let a = 5;

let b = a;

console.log(a)
console.log(b)


console.log("******************")


b = 10;
console.log(b)


//! Refarans  Tipler

//? Function -ARRAY - OBJECT


let dizi = [1, 2, 3]
let dizi2 = [1, 2, 3]
console.log(typeof dizi)
console.log(dizi)
console.log(dizi2)

dizi2.push(12)

console.log(dizi)  // 1,2,3,12
console.log(dizi2) // 1,2,3,121

if (dizi == dizi2) {
    console.lof("Eşittir")
} else {
    console.log("eşitt değildir ")
}


// Eşit değişlidr çünkü ram bellekteki adresleri farklı
