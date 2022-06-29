import createNewToDo from "./todo-item";
import createToDoList from "./todo-list";

document.getElementById("add-todo").addEventListener("click", function() {
  let todo = createNewToDo();
  console.log(todo);
});

window.onload = function() {
  if (localStorage.length == 0) {
    initializePage();
  } else {
    loadFromStorage();
  }
}

function initializePage() {
  let listCollection = {};
  let list = createToDoList("Default List");

  listCollection[1] = list;
  localStorage.setItem("listCollection", JSON.stringify(listCollection));

};

function loadFromStorage() {
  let listCollection = JSON.parse(localStorage.getItem("listCollection"));
  console.log(listCollection);

};

