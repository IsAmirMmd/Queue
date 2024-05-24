class Queue {
  constructor() {
    this.items = [];
    this.rear = 0;
    this.front = 0;
  }

  enqueue(item) {
    this.rear += 1;
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "underflow";
    } else {
      this.front += 1;
      return this.items.shift();
    }
  }

  isEmpty() {
    return this.rear === this.front;
  }

  sizeOfQueue() {
    return this.rear - this.front;
  }
}
