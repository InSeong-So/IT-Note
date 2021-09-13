// 구조체 정의
class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  // 스택에 데이터 삽입
  push(item) {
    const node = new Node(item);
    if (!this.head) {
      this.head = node;
      this.head.next = this.tail;
      node.prev = this.head;
    } else {
      const top = this.tail;
      top.next = node;
      node.prev = top;
    }
    this.tail = node;
    this.size++;
  }
  // 스택의 데이터 반환
  pop() {
    if (!this.head) return null;
    const popedItem = this.tail;
    if (popedItem === this.head) {
      this.head = null;
    } else {
      this.tail = popedItem.prev;
      this.tail.next = null;
    }
    this.size--;
    return popedItem.item;
  }
  // 스택의 사이즈 반환
  size() {
    return this.size;
  }
  // 스택 비우기
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    return true;
  }
  // 스택이 비었는지 확인
  isEmpty() {
    return !!this.size;
  }
  // 스택의 맨 앞 데이터 확인
  front() {
    return this.head;
  }
  // 스택의 맨 뒤 데이터 확인
  rear() {
    return this.tail;
  }
  // 출력
  print() {
    let current = this.head;
    console.log('Stack Elements ============');
    while (current) {
      console.log(current.item);
      current = current.next;
    }
  }
}

class Node {
  constructor(item) {
    this.item = item;
    this.prev = null;
    this.next = null;
  }
}

const stack = new Stack();
console.log(stack.pop());
stack.push([1, 2, 3]);
console.log(stack.pop());
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop());
console.log(stack.front());
console.log(stack.rear());
