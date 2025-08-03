const createQueue = () => {
  let array = [];

  return {
    enqueue: (value) => {
      array.unshift(value);
    },
    dequeue: () => {
      if (array.length === 0) {
        return null; // or some default value
      }
      return array.pop();
    },
    peek: () => {
      if (array.length === 0) {
        return null; // or some default value
      }
      return array[array.length - 1];
    },
    isEmpty: () => {
      return array.length === 0;
    },
    size: () => {
      return array.length;
    },
  };
};

const q = createQueue();
q.enqueue('Task 1');
q.enqueue('Task 2');
q.enqueue('Task 3');
q.dequeue();
q.dequeue(); // Removes 'Task 1'
console.log(q.peek()); // Task 1
