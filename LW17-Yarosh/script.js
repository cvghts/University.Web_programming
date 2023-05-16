// 2
const getToday = () => new Date();
console.log(getToday());

// 3
const nameFunction = (name = 'Anonymous') => name;
console.log(nameFunction());


// 4
const arr = [6, 89, 3, 45, 75, 8, 56, 9, 11];

const maximus = Math.max(...arr);
console.log(maximus);

// 5
const arr2 = [...arr];
arr2.push(751);

console.log(arr);
console.log(arr2);

// 6
const array = ['a', 'b', 'c'];

const [a, b, c] = array;

console.log(`${a} ${b} ${c}`);

// 7
const user = { name: 'John Doe', age: 34 };

const {name, age} = user;

console.log(`${name}, ${age} y.o.`);