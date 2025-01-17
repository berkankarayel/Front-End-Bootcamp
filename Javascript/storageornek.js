let nameInput = document.getElementById("nameInput");
let saveLocal = document.getElementById("saveLocal");
let saveSession = document.getElementById("saveSession");
let clearStorage = document.getElementById("clearStorage");


// Local Storage'a Kaydet
saveLocal.addEventListener("click", function () {
    localStorage.setItem("name", nameInput.value);
    alert("Adınız Local Storage'a kaydedildi!");
});


// Session Storage'a Kaydet
saveSession.addEventListener("click", function () {
    sessionStorage.setItem("name", nameInput.value);
    alert("Adınız Session Storage'a kaydedildi!");
});


// Depolamayı Temizle
clearStorage.addEventListener("click", function () {
    localStorage.clear();
    sessionStorage.clear();
    alert("Tüm depolama temizlendi!");
});