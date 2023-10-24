import { makeAutoObservable } from "mobx";

export class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addItem = (text) => {
    this.todos = [...this.todos, { text: text, checked: false }];
  };

  removeItem = (index) => {
    delete this.todos[index];
  };

  toggleItem = (index) => {
    this.todos[index].checked = !this.todos[index].checked;
  };
}

const todoStore = new TodoStore();
export default todoStore;
