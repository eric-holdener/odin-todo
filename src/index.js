import createNewToDo from "./todo-item";
import createToDoList from "./todo-list";
import { saveToStorage, loadFromStorage } from "./localStorage";

const container = document.getElementById("lists-container");
const commentsContainer = document.getElementById("comments-container");

document.getElementById("add-todo").addEventListener("click", function() {
  let todo = createNewToDo();
  let activeListDom = getActiveList();

  let listCollection = loadFromStorage();
  let list = listCollection[activeListDom.dataset.id]

  let key = getKey(list.items);
  list.items[key] = todo;

  listCollection[activeListDom.dataset.id] = list;
  saveToStorage(listCollection);

  displayToDos(list);
});

document.getElementById("add-todolist").addEventListener("click", function() {
  let title = getTodoListInfo();
  let newList = createToDoList(title);
  let listCollection = loadFromStorage();
  let key = getKey(listCollection);

  listCollection[key] = newList;
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
  wipeContainer(container);
  for (const [key, value] of Object.entries(listCollection)) {
    let button = document.createElement("button");
    button.dataset.id = key;
    button.innerHTML = value.title;
  
    if (value.active == true) {
      button.dataset.active = true;
      displayToDos(value);
    } else {
      button.dataset.active = false;
      button.addEventListener("click", function(e) {
        changeActive(e.target);
      })
    };
  
    container.appendChild(button);
  };
};

function getActiveList() {
  let children = container.children;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];

    if (child.dataset.active == "true") {
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

function wipeContainer(container) {
  while (container.firstChild) {
    container.firstChild.remove();
  };
};

function getKey(list) {
  let keys = Object.keys(list);

  let newKey;
  if (keys.length > 0) {
    newKey = parseInt(keys[keys.length-1]) + 1;
  } else {
    newKey = 1;
  }

  return newKey;
};

function changeActive(target) {
  let current = getActiveList();
  
  let listCollection = loadFromStorage();
  let changingList = listCollection[parseInt(target.dataset.id)];
  let oldList = listCollection[parseInt(current.dataset.id)];
  changingList.active = true;
  oldList.active = false;
  listCollection[parseInt(target.dataset.id)] = changingList;
  listCollection[parseInt(current.dataset.id)] = oldList;
  saveToStorage(listCollection);
  displayList(listCollection);
};

function displayToDos(list) {
  wipeContainer(commentsContainer);

  for (const [key, value] of Object.entries(list.items)) {
    let card = buildCard(key, value);
    commentsContainer.appendChild(card);
  };
}

function buildCard(key, value) {
  let card = document.createElement("div");
  card.classList.add("card");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let cardHead = document.createElement("h2");
  cardHead.classList.add("card-title");
  cardHead.innerHTML = value.title;

  let cardDate = document.createElement("p");
  cardDate.classList.add("card-text");
  cardDate.innerHTML = value.dueDate;

  cardBody.appendChild(cardHead);
  cardBody.appendChild(cardDate);

  card.appendChild(cardBody);

  card.dataset.id = key;

  return card;
};