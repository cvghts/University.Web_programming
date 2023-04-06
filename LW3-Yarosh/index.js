//Завдання 1
let fullName = "Ярош Євгенія В'ячеславівна";
let i = 0;

while (i < fullName.length) {
  if (fullName[i] !== " ") {
    console.log(fullName[i]);
  }
  i++;
}

//Завдання 2
for (let i = 1; i <= 15; i++) {
    let result = Math.pow(2, i);
    if (result <= 40000) {
      console.log(`2 в ${i}-й ступені буде ${result}`);
    } else {
      break;
    }
  }
  
//Завдання 3
i = 0;
let power = 1;

do {
  console.log(`3 в ${i}-й ступені буде ${power}`);
  i++;
  power *= 3;
} while (power <= 60000);

//Завдання 4
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let randomString = "";

for (let i = 0; i < 10; i++) {
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  const randomLetter = alphabet[randomIndex];
  randomString += randomLetter;
}

console.log(randomString);

//Завдання 5
let userInput;

do {
  userInput = prompt('Введіть число більше за 200:');
} while (userInput !== null && (isNaN(userInput) || Number(userInput) <= 200));

if (userInput !== null) {
  console.log(`Ви ввели число ${userInput}`);
} else {
  console.log('Ввід скасовано користувачем');
}
