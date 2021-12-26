export class Logger {
  container;
  constructor() {
    this.container = document.getElementById('logContainer');
  }
  log(...args) {
    args.forEach(message => {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(message));
      this.container.appendChild(li);
    });
  }
}
