let kurs = "Modern web geliştirme kursu"
let tarih = "2012"
let karakter = kurs.charAt(5) // indekse göre karaktei döner
console.log(karakter)

//! Concat: birleştirme 
let sonuc = kurs.concat(" ", tarih)
console.log(sonuc)


//! İndexOf : karakteri ver indeksi al 

let c = kurs.indexOf("o")
console.log(c)

//! Spaceleri sağdan soldan silmek için kullanılır 

console.log(kurs.trim())


//! Slice : sağdan soldan dilimlemek için kullanılır

console.log(kurs.slice(7, 10)) // 7,8,9 indeksi alır


//! substirng : slice ile aynı mantık

console.log(kurs.substring(0, 6))


//! replace : yer değiştirme : modern kelimesini güncel ile yer değiştiri. 

console.log(kurs.replace("Mordern", "Güncel"))



