import foods from './foods';
import {choice, remove} from './helpers';

// Randomly draw a fruit from the array
let fruit = choice(foods);

// Log the messages
console.log(`I'd like one ${fruit}, please.`);
console.log(`Here you go: ${fruit}.`);
console.log(`Delicious! May I have another?`);

// Remove the fruit from the array of fruits
let remFoods = remove(foods, fruit);

// Log the final message
console.log(`I'm sorry, we're all out. But we have ${remFoods.length} other fruits.`);