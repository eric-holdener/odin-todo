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
  resetCommentForm();
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

  let modal = buildModal(key, value);

  let openModalButton = document.createElement("button");
  openModalButton.classList.add("btn");
  openModalButton.classList.add("btn-primary");
  openModalButton.addEventListener("click", function() {
    let modal = new bootstrap.Modal(document.getElementById(`modalComment${key}`));
    modal.show();
  });
  openModalButton.innerHTML = "Show Comment";

  cardBody.appendChild(cardHead);
  cardBody.appendChild(cardDate);
  cardBody.appendChild(openModalButton);
  cardBody.appendChild(modal);

  card.appendChild(cardBody);

  card.dataset.id = key;

  return card;
};

function resetCommentForm() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("dueDate").value = "";
  document.getElementById("priority").value = "";

  document.getElementById("collapseExample").toggle;
};

function buildModal(key, value) {
  let modalContainer = document.createElement("div");
  modalContainer.classList.add("modal");
  modalContainer.classList.add("fade");
  modalContainer.setAttribute("id", `modalComment${key}`);
  modalContainer.setAttribute("tab-index", "-1");
  modalContainer.setAttribute("aria-labelledby", `modalComment${key}Label`);
  modalContainer.setAttribute("aria-hidden", "true");

  let modalDialog = document.createElement("div");
  modalDialog.classList.add("modal-dialog");

  let modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  let modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  
  let modalTitle = document.createElement("h5");
  modalTitle.setAttribute("id", `modalComment${key}Label`);
  modalTitle.innerHTML = value.title;

  let modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");

  let modalDescription = document.createElement("p");
  modalDescription.innerHTML = value.description;

  let modalDuedate = document.createElement("p");
  modalDuedate.innerHTML = value.dueDate;

  let modalFooter = document.createElement("div");
  modalFooter.classList.add("modalFooter");

  let closeButton = document.createElement("button");
  closeButton.classList.add("btn");
  closeButton.classList.add("btn-primary");
  closeButton.setAttribute("data-bs-dismiss", "modal");
  closeButton.innerHTML = "Close"

  modalBody.appendChild(modalDescription);
  modalBody.appendChild(modalDuedate);

  modalHeader.appendChild(modalTitle);

  modalFooter.appendChild(closeButton);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);

  modalDialog.appendChild(modalContent);

  modalContainer.appendChild(modalDialog);

  return modalContainer;
};