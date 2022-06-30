class todoList {
  constructor(title) {
    this.title = title;
    this.items = {};
    this.active = false;
  };
};

export default function createToDoList(title) {
  let list = new todoList(title);
  return list;
};

