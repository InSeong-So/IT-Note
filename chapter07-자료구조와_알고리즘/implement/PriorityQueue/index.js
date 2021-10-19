const compare = (A, B) => {
  if (A[0] < B[0]) return true;
  return false;
};

class PriorityQueue {
  constructor(compareFunc) {
    this.compare = compareFunc;
    this.vec = [0, 0];
    this.limit = 2;
    this.len = 0;
  }

  push(value) {
    if (this.len + 1 == this.limit) {
      this.limit *= 2;
      this.vec.concat(this.vec);
    }

    this.len++;
    let idx = this.len;
    this.vec[idx] = value;

    while (
      idx > 1 &&
      this.compare(this.vec[parseInt(idx / 2)], this.vec[idx])
    ) {
      [this.vec[parseInt(idx / 2)], this.vec[idx]] = [
        this.vec[idx],
        this.vec[parseInt(idx / 2)],
      ];
      idx = parseInt(idx / 2);
    }
  }

  pop() {
    let result = this.vec[1];
    this.vec[1] = this.vec[this.len];
    this.len--;

    let idx = 1;
    while (true) {
      let next = idx;
      let left = idx * 2;
      let right = idx * 2 + 1;

      if (left <= this.len && this.compare(this.vec[next], this.vec[left]))
        next = left;
      if (right <= this.len && this.compare(this.vec[next], this.vec[right]))
        next = right;
      if (next == idx) break;

      [this.vec[idx], this.vec[next]] = [this.vec[next], this.vec[idx]];
      idx = next;
    }

    return result;
  }

  empty() {
    return this.len == 0;
  }
}

let queue = new PriorityQueue(compare);
queue.push([0, 0]);
