class CircularQueue {
  constructor(max_size) {
    this.max_size = max_size;
    this.CircleQ = new Array(max_size);
    this.rear = 0;
    this.front = 0;
  }

  enqueue(item) {
    if (this.sizeOfQueue() === this.max_size) {
      return "overflow";
    } else {
      this.CircleQ[this.rear] = item;
      this.rear = (this.rear + 1) % this.max_size;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "empty";
    } else {
      const item = this.CircleQ[this.front];
      this.CircleQ[this.front] = undefined;
      this.front = (this.front + 1) % this.max_size;
      return item;
    }
  }

  isEmpty() {
    return this.rear === this.front;
  }

  sizeOfQueue() {
    return (this.max_size + this.rear - this.front) % this.max_size;
  }
}
