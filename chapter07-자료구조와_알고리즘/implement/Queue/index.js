class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

module.exports = class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  /**
   * 큐의 후미에 데이터 삽입
   *
   * @param {Node} item
   */
  push(item) {
    const node = new Node(item);
    if (!this.head) {
      this.head = node;
      this.head.next = this.tail;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this._size++;
  }

  /**
   * 큐의 선두에 데이터 삽입
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
   * 큐 선두 데이터 반환
   *
   * @return {Node} item
   */
  popLeft() {
    const popedItem = this.head;
    this.head = this.head.next;
    this._size--;
    return popedItem.item;
  }

  /**
   * 큐의 사이즈 반환
   *
   * @return {Number} size
   */
  size() {
    return this._size;
  }

  /**
   * 큐 비우기
   *
   * @return {Boolean}
   */
  clear() {
    this.head = null;
    this.tail = null;
    this._size = 0;
    return true;
  }

  /**
   * 큐에 데이터가 존재하는지 확인
   *
   * @return {Boolean}
   */
  isEmpty() {
    return !!this._size;
  }

  /**
   * 큐의 선두 데이터 확인
   *
   * @return {Node}
   */
  front() {
    return this.head;
  }

  /**
   * 큐의 후미 데이터 확인
   *
   * @return {Node}
   */
  rear() {
    return this.tail;
  }

  /**
   * 큐 출력하기
   *
   * @return {Node}
   */
  print() {
    let current = this.head;
    console.log('Queue Elements ============');
    while (current) {
      console.log(current.item);
      current = current.next;
    }
  }
};
