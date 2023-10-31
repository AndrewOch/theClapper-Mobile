import { makeAutoObservable } from "mobx";

export class LogStore {
  logs = [];

  constructor() {
    makeAutoObservable(this);
  }

  addLog = (text) => {
    this.logs = [...this.logs, { text: text}];
  };
}

const logStore = new LogStore();
export default logStore;