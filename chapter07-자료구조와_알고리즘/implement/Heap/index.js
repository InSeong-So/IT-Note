module.exports = class Heap {
  constructor() {
    this.items = [];
  }

  /**
   * 값 치환
   *
   * @param {Number} index1
   * @param {Number} index2
   */
  swap(index1, index2) {
    let temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }

  /**
   * 부모 인덱스 구하기
   *
   * @param {Number} index
   * @returns
   */
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  /**
   * 왼쪽 자식 인덱스 구하기
   *
   * @param {Number} index
   * @returns
   */
  leftChildIndex(index) {
    return index * 2 + 1;
  }

  /**
   * 오른쪽 자식 인덱스 구하기
   *
   * @param {Number} index
   * @returns
   */
  rightChildIndex(index) {
    return index * 2 + 2;
  }

  /**
   * 부모 노드 구하기
   *
   * @param {Number}} index
   * @returns
   */
  parent(index) {
    return this.items[this.parentIndex(index)];
  }

  /**
   * 왼쪽 자식 노드 구하기
   *
   * @param {Number}} index
   * @returns
   */
  leftChild(index) {
    return this.items[this.leftChildIndex(index)];
  }

  /**
   * 오른쪽 자식 노드 구하기
   *
   * @param {Number}} index
   * @returns
   */
  rightChild(index) {
    return this.items[this.rightChildIndex(index)];
  }

  /**
   * 최대힙 : 최대값 반환, 최소힙 : 최소값 반환
   *
   * @returns {Number} root
   */
  peek() {
    return this.items[0];
  }

  /**
   * 힙의 크기 반환
   *
   * @returns {Number} size
   */
  size() {
    return this.items.length;
  }
};
