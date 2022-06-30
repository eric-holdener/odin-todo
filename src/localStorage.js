function loadFromStorage() {
  let listCollection = JSON.parse(localStorage.getItem("listCollection"));
  return listCollection;
};

function saveToStorage(listCollection) {
  localStorage.setItem("listCollection", JSON.stringify(listCollection));
};

export { loadFromStorage, saveToStorage }