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

export default function createNewToDo() {
  let info = getTodoInfo();

  let title = info[0],
      description = info[1], 
      dueDate = info[2], 
      priority = info[3];

  let todo = new todoItem(title, description, dueDate, priority);
  return todo;
};

function getTodoInfo() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let dueDate = document.getElementById("dueDate").value;
  let priority = document.getElementById("priority").value;

  console.log(title);

  return [
    title, 
    description,
    dueDate,
    priority
  ];
};

