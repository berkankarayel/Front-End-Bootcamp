// Selectors

// classname , id,tag name 


//! 1-)  getElementById: id ye göre elementi yakala 


let value;

const button = document.getElementById("todoAddButton")


console.log(button)

console.log(button.id)
console.log(button.getAttribute("id"))
console.log(button.className)

console.log(button.getAttribute("class"))

const classListe = button.classList

console.log(classListe.item(3))


let buttonText = button.textContent; // değişikleri string olarak algılar

let buttonText2 = button.innerHTML; // değişikleri html olarak algılar


console.log(buttonText)
console.log(buttonText2)


//! 2-) getElementByClass

const todoList = Array(document.getElementsByClassName("list-group-item"))


todoList.forEach(function (a) {
    console.log(a)
})


//! 3-) getElementByTagName 


const form = document.getElementsByTagName("form")
console.log(form[0].id)


//! 4-) querySelector - querySelectorAll


const clearButton = document.querySelector("#todoName")
console.log(clearButton)

const todoList1 = document.querySelector(".w-100")
console.log(todoList1)


const todoList3 = document.querySelectorAll(".list-group-item")
console.log(todoList3)