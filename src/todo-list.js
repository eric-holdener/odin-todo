class todoList {
  constructor(title) {
    this.title = title;
    this.items = {};
  };
};

export default function createToDoList(title) {
  let list = new todoList(title);
  return list;
};