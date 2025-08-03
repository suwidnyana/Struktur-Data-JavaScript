const createStack = (initialValue) => {
  let array = [];

  return {
    push: (value) => {
      array.push(value);
    },
    pop: () => {
      if (array.length === 0) {
        return initialValue;
      }
      return array.pop();
    },
    peek: () => {
      if (array.length === 0) {
        return initialValue;
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

const foodStack = createStack('No food');
foodStack.push('Pizza');
foodStack.push('Pizza2');
console.log(foodStack.peek()); // Pizza
console.log(foodStack); // Pizza2
