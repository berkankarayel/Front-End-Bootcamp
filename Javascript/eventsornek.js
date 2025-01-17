let box = document.getElementById("myBox");
let inputField = document.getElementById("myInput");
let button = document.getElementById("myButton");


// Mouse olayları


box.addEventListener("mouseover", function () {
    box.textContent = "Üzerine gelindi"
})

box.addEventListener("mouseout", function () {
    box.textContent = "Fareyi Üzerime Getir";
});

// Input olayları
inputField.addEventListener("input", function () {
    console.log(`Girdi: ${inputField.value}`);
});

// Button click
button.addEventListener("click", function () {
    alert("Butona tıklandı!");
});