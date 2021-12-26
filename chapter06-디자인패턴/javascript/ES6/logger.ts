export class Logger {
  container: HTMLElement;
  constructor() {
    this.container = document.getElementById('logContainer') as HTMLElement;
  }
  log(...args: any[]) {
    args.forEach(message => {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(message));
      this.container.appendChild(li);
    });
  }
}
