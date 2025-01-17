let button = document.getElementById("changeButton")
let title = document.getElementById("title")

button.addEventListener("click", function () {
    title.textContent = "başlık değiştirildi"
    title.style.color = "blue"
})