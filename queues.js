/**
 * ============================================================================
 * Queues
 * ============================================================================
 */

// Queues must satisfy the following protocols:
// - enqueue (add to queue)
// - dequeue (remove from queue)
// - front (gets head)
// - isEmpty (checks if queue is empty)
// - size (returns size of array)

// Basic ES6 Class
// class Queue {
//   constructor() {
//     this.items = [];
//   }
//
//   enqueue(value) {
//     this.items.push(value);
//   }
//
//   dequeue() {
//     return this.items.shift();
//   }
//
//   front() {
//     return this.items[0];
//   }
//
//   isEmpty() {
//     return this.items.length === 0;
//   }
//
//   size() {
//     return this.items.length;
//   }
//
//   clear() {
//     this.items = [];
//   }
//
//   print() {
//     console.log(this.items.toString());
//   }
//
//   toString() {
//     return this.items.toString();
//   }
//
// }

// ES6 Class with WeakMap
let Queue = (() => {
  const items = new WeakMap();

  class Queue {
    constructor() {
      items.set(this, []);
    }

    enqueue(value) {
      const q = items.get(this);
      q.push(value);
    }

    dequeue() {
      const q = items.get(this);
      const r = q.shift();
      return r;
    }

    front() {
      const q = items.get(this);
      return q[0];
    }

    isEmpty() {
      return items.get(this).length === 0;
    }

    size() {
      const q = items.get(this);
      return q.length;
    }

    clear() {
      items.set(this, []);
    }

    print() {
      console.log(this.toString());
    }

    toString() {
      return items.get(this).toString();
    }
  }
  return Queue;
})();

// Using the Queue
const queue = new Queue();
console.log(queue.isEmpty()); // true
queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Camila');
queue.print(); // John,Jack,Camila
console.log(queue.size()); // 3
console.log(queue.isEmpty()); // false
queue.front(); // John is at front, was first element in queue
queue.dequeue(); // removes John, was front
queue.dequeue(); // removes Jack
queue.print(); // Camila

/**
 * ============================================================================
 * Variations: Priority Queue
 * ============================================================================
 */

let PriorityQueue = (() => {
  const items = new WeakMap();

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  class PriorityQueue {
    constructor() {
      items.set(this, []);
    }

    enqueue(value, priority) {
      const q = items.get(this);
      const e = new QueueElement(value, priority);
      let added = false;

      for (let i = 0, ii = q.length; i < ii; i += 1) {
        if (e.priority < q[i].priority) {
          q.splice(i, 0, e);
          added = true;
          break;
        }
      }

      if (!added) {
        q.push(e);
      }
    }

    dequeue() {
      const q = items.get(this);
      const r = q.shift();
      return r;
    }

    front() {
      const q = items.get(this);
      return q[0];
    }

    isEmpty() {
      return items.get(this).length === 0;
    }

    size() {
      const q = items.get(this);
      return q.length;
    }

    clear() {
      items.set(this, []);
    }

    print() {
      const q = items.get(this);

      for (let i = 0, ii = q.length; i < ii; i += 1) {
        console.log(`${q[i].element} - ${q[i].priority}`);
      }
    }

    toString() {
      return items.get(this).toString();
    }
  }
  return PriorityQueue;
})();

// Using the PriorityQueue
let priorityQueue = new PriorityQueue();
priorityQueue.enqueue('John', 2);
priorityQueue.enqueue('Jack', 1);
priorityQueue.enqueue('Camila', 1);
priorityQueue.print();

/**
 * ============================================================================
 * Variations: Circular Queue (Hot Potato)
 * ============================================================================
 */

const hotPotato = (nameList, roundNums) => {
  const q = new Queue();

  let eliminated = '';

  // Add names to queue
  for (let i = 0, ii = nameList.length; i < ii; i += 1) {
    q.enqueue(nameList[i]);
  }

  // Cycle through rounds
  while (q.size() > 1) {
    for (let i = 0; i < roundNums; i += 1) {
      q.enqueue(q.dequeue());
    }
    eliminated = q.dequeue();
    console.log(`${eliminated} was eliminated from the Hot Potato game.`);
  }
  return q.dequeue();
};

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const winner = hotPotato(names, 7);
console.log(`The winner is ${winner}`);

/**
 * ============================================================================
 * Fun Fact: JavaScript utilizes queues to manage the event loop!!
 * ============================================================================
 */
