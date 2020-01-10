// ===========================================================================================================
// https://medium.com/better-programming/how-to-remove-a-particular-value-from-an-array-in-javascript-b5bf4ad42a58

// Technique #1
let numbers = [1, 2, 3, 4, 5];
delete numbers[2];
// console.log('keyword', numbers);

// Technique #2
let numbers2 = [1, 2, 3, 4, 5];
numbers2.splice(2, 1);
// console.log('splice', numbers2);

// Example real-world
let numbers3 = [1, 2, 3, 4, 5];
const search_value = 3;
const search_index = numbers3.indexOf(search_value);

if (search_index >= 0) {
   numbers3.splice(search_index, 1);
}
// console.log('Example real-world', numbers3);

// ===========================================================================================================
// https://medium.com/better-programming/replace-your-javascript-if-else-statements-with-the-ternary-operator-bf9c8fa3cb46

// refactoring
const canVoting = (age = 17) => (age >= 18 ? true : false);

console.log('canVote: ', canVoting(19));
