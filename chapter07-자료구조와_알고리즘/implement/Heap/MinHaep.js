const Heap = require('./index.js');

class MinHeap extends Heap {
  bubbleUp() {
    let index = this.items.length - 1;
    while (
      this.parent(index) !== undefined &&
      this.parent(index) > this.items[index]
    ) {
      this.swap(index, this.parentIndex(index));

      index = this.parentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;
    while (
      this.leftChild(index) !== undefined &&
      (this.leftChild(index) < this.items[index] ||
        this.rightChild(index) < this.items[index])
    ) {
      let smallerIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) !== undefined &&
        this.rightChild(index) < this.items[smallerIndex]
      ) {
        smallerIndex = this.rightChildIndex(index);
      }

      this.swap(index, smallerIndex);
      index = smallerIndex;
    }
  }

  /**
   * 힙에 원소 추가
   *
   * @param {*} item
   */
  add(item) {
    this.items[this.items.length] = item;
    this.bubbleUp();
  }

  /**
   * 힙에서 원소 빼내기 : 최소값
   *
   * @returns
   */
  poll() {
    let item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
  }
}
