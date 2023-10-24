import { makeAutoObservable } from "mobx";

export class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addItem = (text) => {
    this.todos = [...this.todos, { text: text, checked: false }];
  };

  removeItem = (item) => {
    const index = this.todos.indexOf(item);
    delete this.todos[index];
  };

  toggleItem = (item) => {
    const index = this.todos.indexOf(item);
    this.todos[index].checked = !this.todos[index].checked;
  };

  checkedTodos = () => {
    return this.todos.filter((item) => item.checked);
  }
}

const todoStore = new TodoStore();
export default todoStore;
