//map examples.......................................

// Basic numerical transformation
const number = [1, 2, 3, 4, 5]; 
const doubledNumbers = number.map(num => num * 2); 
console.log(doubledNumbers);  

// String processing
const names = ['alia', 'sidra', 'ahmad']; 
const capitalizedNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1)); 
console.log(capitalizedNames);

// Object transformation
const users = [ 
{ id: 1, name: 'John', age: 25 }, 
{ id: 2, name: 'Sarah', age: 32 }, 
]; 
const userAges = users.map(user => ({ userId: user.id, age: user.age })); 
console.log(userAges);

// Using index in the callback
const items = ['a', 'b', 'c']; 
const indexedItems = items.map((item, index) => `${index}: ${item}`); 
console.log(indexedItems);  




//Filter examples..............................

// Filtering even numbers from an array 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const evenNumbers = numbers.filter(number => number % 2 === 0); 
console.log(evenNumbers);  



// Filtering Strings Longer Than a Specific Length: 
const words = ["apple", "banana", "orange", "kiwi", "grape"]; 
const longWords = words.filter(word => word.length > 5); 
console.log(longWords);  


// Filtering Objects Based on a Property Value: 
const products = [ 
    { name: "apple", price: 1.99 }, 
    { name: "banana", price: 0.99 }, 
    { name: "orange", price: 2.49 }, 
    { name: "kiwi", price: 3.29 } 
]; 
const expensiveProducts = products.filter(product => product.price > 2); 
console.log(expensiveProducts); 



//Reduce examples........................................
// Summing all elements in an array: 
const nums = [1, 2, 3, 4, 5]; 
const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
console.log(sum);  


const fruits = ['Banana', 'Orange', 'Apple', 'Orange', 'Pear', 'Banana']; 
const occurrences = fruits.reduce((accumulator, currentValue) => { 
accumulator[currentValue] = (accumulator[currentValue] || 0) + 1; 
return accumulator; 
}, {}); 
console.log(occurrences); 