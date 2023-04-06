let name = "Євгенія", age = 18;
const myBirthday = "22.11.2004";
console.log(name);
console.log(age);
console.log(myBirthday);
console.log(typeof name);
console.log(typeof age);
console.log(typeof myBirthday);
let bool = true;
console.log(typeof bool);
let BIGINT =  1234567890123456789012345678901234567890n;
console.log(typeof BIGINT);
/*
  Типи даних:
  1. Undefined
  2. Boolean
  3. Number
  4. String
  5. BigInt
  6. Symbol
  7. Null
  8. Object
*/
alert(`My name is ${ name }`);
let city = prompt('Яке Ваше рідне місто?', `Одеса`);
alert(city);
let isStudent;
isStudent = confirm("Ви студент?")
alert(isStudent);


// 1. Які кінцеві значення всіх змінних a, b, c та d після виконання коду нижче?
let a = 3, b = 3;
let c = ++a; // 4
let d = b++; // 3
console.log(c);
console.log(d);

//2. Який буде результат порівняння в першому випадку:
let income = 100;
let strIncome = "100";
let result = income == strIncome;
console.log(result); // true

//та другому випадку:
let INCOME = 100;
let STRINCOME = "100";
let RESULT = INCOME === STRINCOME;
console.log(RESULT); // false
