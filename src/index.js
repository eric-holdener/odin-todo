import createNewToDo from "./todo-item";
import createToDoList from "./todo-list";
import { saveToStorage, loadFromStorage } from "./localStorage";

const container = document.getElementById("lists-container");

document.getElementById("add-todo").addEventListener("click", function() {
  let todo = createNewToDo();
  let activeList = getActiveList();

  console.log(activeList);

  console.log(todo);
});

document.getElementById("add-todolist").addEventListener("click", function() {
  let title = getTodoListInfo();
  let newList = createToDoList(title);
  let listCollection = loadFromStorage();
  let keys = Object.keys(listCollection);
  let newKey = parseInt(keys[keys.length-1]) + 1

  listCollection[newKey] = newList;
  saveToStorage(listCollection);
  displayList(listCollection);

})

window.onload = function() {
  let listCollection = checkLocalForEmpty();
  displayList(listCollection);

}; 

function initializePage() {
  let listCollection = {};
  let list = createToDoList("Default List");
  list.active = true;

  listCollection[1] = list;
  saveToStorage(listCollection);

  return listCollection;
};

function displayList(listCollection) {
  wipeContainer();
  for (const [key, value] of Object.entries(listCollection)) {
    let button = document.createElement("button");
    button.dataset.id = key;
    button.innerHTML = value.title;
  
    if (value.active == true) {
      button.dataset.active = true;
    } else {
      button.dataset.active = false;
    };
  
    container.appendChild(button);
  };
};

function getActiveList() {
  let children = container.children;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    if (child.dataset.active == true) {
      return child;
    };
  };
};

function checkLocalForEmpty () {
  let listCollection;

  if (localStorage.length == 0) {
    listCollection = initializePage();
  } else {
    listCollection = loadFromStorage();
  };
  return listCollection;
};

function getTodoListInfo() {
  let title = document.getElementById("list-title").value;
  return title;
};

function wipeContainer() {
  while (container.firstChild) {
    container.firstChild.remove();
  };
};

