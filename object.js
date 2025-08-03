let food = {
  name: 'bakso',
  description: 'A popular Indonesian meatball dish',
  ingredients: ['beef', 'noodles', 'broth'],
  price: 15000,
  isBig: true,
  order: true,
};

console.log(food.name); // Output: bakso
console.log(food.ingredients[1]); // Output: noodles
console.log(food.takeAway || 'takeAway'); // Output: takeAway

let entries = Object.entries(food);
console.log(entries); // Output: [['name', 'bakso'], ['description', 'A
