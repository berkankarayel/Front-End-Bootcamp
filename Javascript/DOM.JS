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

// style özelliği 

const todo1 = document.querySelectorAll(".list-group-item")[0];

todo1.style.color = "#fff";
todo1.style.backGroundColor = "purple"


// elmentler üzerinde geiznmek parents ilişkisi.

todo1.children[0]
todo1.children[todo1.children.length - 1]


// çoçuktan anneye erişme 

todo1.parentElement.parentElement[1]



//? Element Oluşturma : CreateElement

//! appendChild : sonuna ekle

const cardBody = document.querySelectorAll(".card-body")[1]

const link = document.createElement("a")
link.id = "gıBlogWebsite";
link.className = "btn btn-dark btn-sm mt-3"
link.href = "http://enesbayram.net"
link.target = "_blank" // ayrı sekmede açar
link.innerHTML = "Kişisel websiteme git"

cardBody.appendChild(link)


const todo3 = document.createElement("li")
const todoLink = document.createElement("a")
const i = document.createElement("i")

todo3.className = "list-group"
todo3.innerHTML = "todo5"

todoLink.href = "#"
todoLink.className = "delete-item"

i.className = "fa fa"

todoLink.appendChild(i)
todo3.appendChild(todoLink)

const ddd = document.querySelector(".list-group")

ddd.appendChild(todo3)


