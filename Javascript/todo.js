//Tüm Elementleri Seçmek


const form = document.querySelector("#todoAddForm")
const addInput = document.querySelector("#todoName")
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");

let todos = [];

runEvents()

function runEvents() {
    form.addEventListener("submit", addTodo);
}


function addTodo(e) {
    const InputText = addInput.value.trim()

    if (InputText == null || InputText == "") {
        alert("Lütfen değer giriniz")
        showAlert("warning", "Lütfen boş bırakmayınız!");
    } else {
        // arayüze ekleme 
        addTodoToUI(InputText)
        addTodoToStorage(InputText)
        showAlert("success", "Todo Eklendi.");
    }



    // storage ekleme 
    e.preventDefault(); // farklı sayfaya gitmesini engelledik
}

function addTodoToUI(newTodo) {
    /*
<li class="list-group-item d-flex justify-content-between">Todo 1
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li>
                        */
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";
}

function addTodoToStorage(newTodo) {
    checkTodsoFormStorage();
    todos.push(newTodo)
    localStorage.setItem("todos", JSON.stringify(todos))
}


function checkTodsoFormStorage() {
    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
}


function showAlert(type, message) {
    /*
    <div class="alert alert-warning" role="alert">
    This is a warning alert—check it out!
  </div>*/
    const div = document.createElement("div");
    //   div.className="alert alert-"+type;
    div.className = `alert alert-${type}`; //litirel template
    div.textContent = message;

    firstCardBody.appendChild(div);

    setTimeout(function () {
        div.remove();
    }, 2500);
}