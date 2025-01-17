// Bir elementi ID ile seçmek
let elementById = document.getElementById("myElement");

// Birden fazla elementi sınıf adıyla seçmek
let elementsByClass = document.getElementsByClassName("myClass");

// Bir elementi etiket adıyla seçmek
let elementsByTag = document.getElementsByTagName("div");

// CSS seçicileriyle element seçmek
let elementByQuery = document.querySelector(".myClass"); // İlk bulduğunu seçer
let elementsByQueryAll = document.querySelectorAll(".myClass"); // Hepsini seçer

let element = document.getElementById("myElement");
element.textContent = "Yeni içerik!"; // Sadece metin değiştirir
element.innerHTML = "<b>Kalın yazı</b>"; // HTML içerik ekler

let element = document.getElementById("myElement");
element.style.color = "red"; // Yazı rengini kırmızı yapar
element.style.backgroundColor = "yellow"; // Arka plan rengini sarı yapar







let newElement = document.createElement("p"); // Yeni bir paragraf oluştur
newElement.textContent = "Bu yeni bir paragraf."; // İçeriğini belirle

let container = document.getElementById("container");
container.appendChild(newElement); // Yeni paragrafı mevcut bir elemana ekle


let element = document.getElementById("myElement");
element.remove(); // Elementi sayfadan kaldırır