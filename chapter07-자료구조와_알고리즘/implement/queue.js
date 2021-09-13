// 구조체 정의
module.exports = class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Overflow : 큐가 가득 차서 더 이상 자료를 넣을 수 없는 경우로서 put이 불가능
  // Underflow : 큐가 비어 있어 자료를 꺼낼 수 없는 경우로 get이 불가능

  // 큐에 데이터 삽입
  push(item) {
    const node = new Node(item);
    if (!this.head) {
      this.head = node;
      this.head.next = this.tail;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
  }
  // 큐의 데이터 반환
  popLeft() {
    const popedItem = this.head;
    this.head = this.head.next;
    this.size--;
    return popedItem.item;
  }
  // 큐의 사이즈 반환
  size() {
    return this.size;
  }
  // 큐 비우기
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    return true;
  }
  // 큐에 데이터가 존재하는지 반환
  isEmpty() {
    return !!this.size;
  }
  // 큐의 맨 앞 데이터 확인
  front() {
    return this.head;
  }
  // 큐의 맨 뒤 데이터 확인
  rear() {
    return this.tail;
  }
  // 출력
  print() {
    let current = this.head;
    console.log('Queue Elements ============');
    while (current) {
      console.log(current.item);
      current = current.next;
    }
  }
};

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

// 아래를 복사해서 사용하세욥
const Queue = require('../../lib/structure/Queue');

// 큐 테스트
const q = new Queue();
for (let i = 0; i < 100000; i++) {
  q.push(i);
}

// 100000개 삭제
const startQ = new Date().getTime();
for (let i = 0; i < 100000; i++) {
  q.popLeft();
}
const endQ = new Date().getTime();
console.log('Queue 수행 시간: ', endQ - startQ);
