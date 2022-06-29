import createNewToDo from "./todo-item";

document.getElementById("add-todo").addEventListener("click", function() {
  let todo = createNewToDo();
  console.log(todo);
});

