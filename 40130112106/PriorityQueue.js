class Data {
  constructor(priority, item) {
    this.priority = priority;
    this.item = item;
  }
}

class PriorityQueue {
  constructor() {
    this.pQueue = [];
    this.rear = 0;
    this.front = 0;
  }

  enqueue(item, priority) {
    const newItem = new Data(priority, item);

    if (this.isEmpty()) {
      this.pQueue[this.rear] = newItem;
      this.rear += 1;
    } else {
      let added = false;
      for (let i = 0; i < this.pQueue.length; i++) {
        if (this.pQueue[i].priority <= newItem.priority) {
          this.pQueue.splice(i, 0, newItem);
          this.rear += 1;
          added = true;
          break;
        }
      }
      if (!added) {
        this.pQueue.push(newItem);
        this.rear += 1;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "underflow";
    } else {
      this.front += 1;
      return this.pQueue.pop();
    }
  }

  isEmpty() {
    return this.rear === this.front;
  }

  sizeOfQueue() {
    return this.rear - this.front;
  }
}
