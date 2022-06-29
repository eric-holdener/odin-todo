import createNewToDo from "./todo-item";
import createToDoList from "./todo-list";

document.getElementById("add-todo").addEventListener("click", function() {
  let todo = createNewToDo();
  console.log(todo);
});

window.onload = function() {
  let listCollection
  if (localStorage.length == 0) {
    listCollection = initializePage();
  } else {
    listCollection = loadFromStorage();
  };
  let container = document.getElementById("lists-container");

  for (const [key, value] of Object.entries(listCollection)) {
    displayList(key, value, container);
  };
}; 

function initializePage() {
  let listCollection = {};
  let list = createToDoList("Default List");

  listCollection[1] = list;
  localStorage.setItem("listCollection", JSON.stringify(listCollection));

  return listCollection;
};

function loadFromStorage() {
  let listCollection = JSON.parse(localStorage.getItem("listCollection"));
  return listCollection;
};

function displayList(key, value, container) {
  let button = document.createElement("button");
  button.dataset.id = key;
  button.innerHTML = value.title;

  container.appendChild(button);
}

