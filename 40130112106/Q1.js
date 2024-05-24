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
            return "UnderFlow";
        } else {
            this.front += 1;
            return this.items.shift(); // Use shift to remove and return the first element
        }
    }

    isEmpty() {
        return this.rear === this.front;
    }

    sizeOfQueue() {
        return this.rear - this.front;
    }
}

function shortestPath(maze, start, end) {
    const directions = [
        [0, 1], [0, -1], [1, 0], [-1, 0]
    ];
    const rows = maze.length;
    const cols = maze[0].length;
    const visited = new Set();
    const queue = new Queue();

    queue.enqueue([start, 0]);

    while (!queue.isEmpty()) {
        const [currentPos, dist] = queue.dequeue();

        if (JSON.stringify(currentPos) === JSON.stringify(end)) {
            return dist;
        }

        visited.add(JSON.stringify(currentPos));

        for (const [dx, dy] of directions) {
            const newX = currentPos[0] + dx;
            const newY = currentPos[1] + dy;

            if (
                newX >= 0 && newX < rows &&
                newY >= 0 && newY < cols &&
                maze[newX][newY] === 0 &&
                !visited.has(JSON.stringify([newX, newY]))
            ) {
                queue.enqueue([[newX, newY], dist + 1]);
            }
        }
    }

    return -1;
}
