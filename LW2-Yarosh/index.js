//код який відповідає схемі
function testNum(a) {
    let result;
    if (a > 0) {
      result = 'positive';
    } else {
      result = 'NOT positive';
    }
    return result;
    }
  
  console.log(testNum(-5));

  //введеня числа та виведення повідомлення
  let input = prompt("Введіть число:");
  let number = +input;
  
  if (typeof number === "number" && !isNaN(number)) {
    if (number > 0) {
      alert("Більше нуля");
    } else if (number < 0) {
      alert("Менше нуля");
    } else {
      alert("Нуль");
    }
  } else {
    alert("Ви ввели не число");
  }

  //отримуємо числа та виконуємо дії
  let a = +prompt("Введіть перше число:");
let b = +prompt("Введіть друге число:");

if (!isNaN(a) && !isNaN(b)) {
  let result = (a + b < 10) ? 'Сума менше 10' : 'Сума більше або дорівнює 10';
  console.log(result);
} else {
  console.log("Ви ввели не числа");
}

//вводимо числа і перевіряємо парність
let Input = prompt('Введіть число:');
switch (true) {
  case isNaN(Input):
    console.log('Введено не число');
    break;
  case Number(Input) % 2 === 0:
    console.log('Введене число є парним');
    if (Number(input) >= 10) {
      let lastDigit = Input.toString().charAt(Input.toString().length - 1);
      console.log(`Остання цифра введеного числа: ${lastDigit}`);
    }
    break;
  default:
    console.log('Введене число є непарним');
    if (Number(Input) >= 10) {
      let lastDigit = Input.toString().charAt(Input.toString().length - 1);
      console.log(`Остання цифра введеного числа: ${lastDigit}`);
    }
    break;
}

//відповіді
console.log( null || 7 || undefined ); //7
console.log( null || 2 && 3 || 4 ); //3

//дії зі зміною age
let age = 30;
if (age >= 16 && age <= 100) {
    console.log("Вік знаходиться між 16 та 100");
}

if (!(age > 16 && age < 100)) {
    console.log("Вік не знаходиться між 16 та 100 невключно з оператором НЕ");
}

if (age <= 16 || age >= 100) {
    console.log("Вік не знаходиться між 16 та 100 невключно без оператора НЕ");
}