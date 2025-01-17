//! Tıklama Olayı



let button = document.getElementById("myButton")
button.addEventListener("click", function () {
    alert("Butona Tıkladınız");
})


//! Klavyeden tıklama olayı 

document.addEventListener("keydown", function (event) {
    console.log("basılan tuş:" + event.key)
})


function handleClick() {
    alert("Butona tıkladınız!");
}

button.addEventListener("click", handleClick);

// Olayı kaldır
button.removeEventListener("click", handleClick);


//? 1. click (Tıklama)

let button1 = document.getElementById("myButton");
button1.addEventListener("click", function () {
    console.log("Butona tıklandı!");
});


//? dblclick (Çift Tıklama)

button.addEventListener("dblclick", function () {
    console.log("Butona çift tıklandı!");
});


//? . mouseover ve mouseout (Üzerine Gelme ve Ayrılma)

let box = document.getElementById("myBox");

box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "yellow"; // Üzerine gelince renk değiştir
});

box.addEventListener("mouseout", function () {
    box.style.backgroundColor = "white"; // Ayrılınca renk eski haline döner
});


//?  mousedown ve mouseup (Basılma ve Bırakma)

box.addEventListener("mousedown", function () {
    console.log("Fare butonu basıldı!");
});

box.addEventListener("mouseup", function () {
    console.log("Fare butonu bırakıldı!");
});


//?  mousemove (Hareket Etme)

box.addEventListener("mousemove", function (event) {
    console.log(`Fare X: ${event.clientX}, Fare Y: ${event.clientY}`);
});



//! Klavye Olayları
// Kullanıcı klavyede bir tuşa bastığında bu olaylar tetiklenir.

//  keydown (Tuşa Basılma)

document.addEventListener("keydown", function (event) {
    console.log(`Basılan tuş: ${event.key}`);
});

document.addEventListener("keyup", function (event) {
    console.log(`Bırakılan tuş: ${event.key}`);
});


// Input Olayları
// Form veya giriş alanlarıyla ilgili olaylardır.

// 1. input(Kullanıcı yazı yazdığında tetiklenir)

let inputField = document.getElementById("myInput");

inputField.addEventListener("input", function () {
    console.log(`Giriş: ${inputField.value}`);
});


// 2. focus ve blur (Odaklanma ve Odaktan Çıkma)

inputField.addEventListener("focus", function () {
    inputField.style.border = "2px solid blue"; // Odaklanınca çerçeve rengi değişir
});

inputField.addEventListener("blur", function () {
    inputField.style.border = "1px solid gray"; // Odaktan çıkınca eski haline döner
});


inputField.addEventListener("change", function () {
    console.log("Değer değiştirildi!");
});


// 4. submit (Form Gönderme)
let form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Sayfanın yenilenmesini engeller
    console.log("Form gönderildi!");
});