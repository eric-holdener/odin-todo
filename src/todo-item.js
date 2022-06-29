class todoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = [];
    this.checklist = [];
  };
};

function createNewToDo() {
  title, description, dueDate, priority = getTodoInfo();
  let todo = new todoItem(title, description, dueDate, priority);
  return todo;
};

function getTodoInfo() {
  title = document.getElementById("title");
  description = document.getElementById("description");
  dueDate = document.getElementById("dueDate");
  priority = document.getElementById("priority");

  return title, description, dueDate, priority;
}