//! Çıktı Verme;

//  1) document ile çıktı verme

document.write("yazılım <br>");
document.write("dersleri <br>")




// console ile çıktı verme

console.log("deneme")
console.log(true)




//! window Objesi

// window.alert()

// Ekrana bir uyarı mesajı gösterir.
window.alert("Merhaba!")

// window.confirm()

//Kullanıcıya bir onay kutusu gösterir. "Tamam" veya "İptal" seçeneği döndürür.
window.confirm("Emin misiniz?");


// window.prompt()

// Kullanıcıdan bir giriş alır ve sonucu döndürür.
let isim = window.prompt("Adınızı girin:");
document.write(isim)


// window.location

// Tarayıcının URL bilgisini alır veya değiştirebilir.
// window.location.href = "https://www.google.com";


// Belirli bir süre sonra bir fonksiyon çalıştırır (bir kez).
setTimeout(() => alert("Zaman doldu!"), 2000);

window.setInterval()

// Belirli aralıklarla bir fonksiyon çalıştırır.
setInterval(() => console.log("Tekrarlandı"), 1000);


// window.localStorage ve window.sessionStorage

// Tarayıcıda veri saklamak için kullanılır.


localStorage.setItem("isim1", "Ahmet");
let isim1 = localStorage.getItem("isim1");


// document.getElementById()

// Belirli bir ID’ye sahip HTML elementini seçer.
let eleman1 = document.getElementById("baslik");


// document.querySelector()

// CSS seçicisi ile ilk eşleşen elementi döndürür.
let eleman = document.querySelector(".sınıf");


// document.querySelectorAll()

// CSS seçicisi ile eşleşen tüm elementleri döndürür (NodeList).
let elemanlar = document.querySelectorAll("p");


// document.removeChild()
let silinecek = document.getElementById("baslik");
document.body.removeChild(silinecek);