import { makeAutoObservable } from "mobx";

export class LogStore {
  logs = [];

  constructor() {
    makeAutoObservable(this);
  }

  addLog = (text) => {
    this.logList = [...this.logList, text];
  };
}

const logStore = new LogStore();
export default logStore;