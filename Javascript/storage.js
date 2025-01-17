// Session Storage
sessionStorage.setItem("key", "value");

// Local Storage
localStorage.setItem("key", "value");


// Session Storage
let value = sessionStorage.getItem("key");
console.log(value); // "value"

// Local Storage
let value2 = localStorage.getItem("key");
console.log(value2); // "value"


// Belirli bir anahtarı silme
sessionStorage.removeItem("key");
localStorage.removeItem("key");

// Tüm verileri temizleme
sessionStorage.clear();
localStorage.clear();


// Tüm localStorage anahtarlarını listele
for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i));
}

// Tüm sessionStorage anahtarlarını listele
for (let i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.key(i));
}


