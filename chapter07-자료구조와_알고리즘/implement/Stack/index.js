class Node {
  constructor(item) {
    this.item = item;
    this.prev = null;
    this.next = null;
  }
}

module.exports = class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * 스택의 후미에 데이터 삽입
   *
   * @param {Node} item
   */
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

  /**
   * 스택의 선두에 데이터 삽입
   *
   * @param {Node} item
   */
  append(item) {
    const node = new Node(item);
    if (!this.head) {
      this.head = node;
      this.head.next = this.tail;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this._size++;
  }

  /**
   * 스택 후미 데이터 반환
   *
   * @return {Node} item
   */
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

  /**
   * 스택의 사이즈 반환
   *
   * @return {Number} size
   */
  size() {
    return this.size;
  }

  /**
   * 스택 비우기
   *
   * @return {Boolean}
   */
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    return true;
  }

  /**
   * 스택에 데이터가 존재하는지 확인
   *
   * @return {Boolean}
   */
  isEmpty() {
    return !!this.size;
  }

  /**
   * 스택의 선두 데이터 확인
   *
   * @return {Node}
   */
  front() {
    return this.head;
  }

  /**
   * 스택의 후미 데이터 확인
   *
   * @return {Node}
   */
  rear() {
    return this.tail;
  }

  /**
   * 스택 출력하기
   *
   * @return {Node}
   */
  print() {
    let current = this.head;
    console.log('Stack Elements ============');
    while (current) {
      console.log(current.item);
      current = current.next;
    }
  }
};
