//Завдання 1: Функція для обчислення площі кола
function calculateCircleArea(radius) {
    return Math.PI * radius ** 2;
  }
  
  //Завдання 2: Функція для обчислення довжини кола
  function calculateCircleLength(radius) {
    return 2 * Math.PI * radius;
  }
  
  //Завдання 3: Функція для обчислення середнього арифметичного двох чисел
  function calculateAverage(num1, num2) {
    return (num1 + num2) / 2;
  }
  
  //Завдання 4: Функція для обчислення математичних операцій над числами
  function calc(x, y, action) {
    switch (action) {
      case "+":
        return x + y;
      case "-":
        return x - y;
      case "*":
        return x * y;
      case "/":
        return x / y;
      case "%":
        return x % y;
      default:
        return "Недійсна дія";
    }
  }
  
  //Завдання 5: Функція для обробки двох чисел
  function processNumbers(num1, num2) {
    if (num1 % 2 === 0 && num2 % 2 === 0) {
      return num1 * num2;
    } else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
      return num1 + num2;
    } else {
      return num1 % 2 !== 0 ? num1 : num2;
    }
  }
  
  //Завдання 6: Функція для перевірки, чи число є простим
  function isPrimeNumber(num) {
    if (num < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  //Завдання 7: Функція для перевертання числа
  function reverseNumber(num) {
    return Number(num.toString().split("").reverse().join(""));
  }
  
  //Завдання 8: Функція для отримання дня тижня за номером
  function getWeekdayByNumber(num) {
    switch (num) {
      case 1:
        return "Монеділок";
      case 2:
        return "Вівторок";
      case 3:
        return "Середа";
      case 4:
        return "Четвер";
      case 5:
        return "П'ятниця";
      case 6:
        return "Субота";
      case 7:
        return "Неділя";
      default:
        return "Недійсний номер дня тижня";
    }
  }
  
  console.log(calculateCircleArea(5)); //78.53981633974483
  console.log(calculateCircleLength(5)); //31.41592653589793
  console.log(calculateAverage(4, 6)); //5
  console.log(calc(4, 6, "+")); //10
  console.log(processNumbers(3, 5)); //8
  console.log(isPrimeNumber(7)); // true
  console.log(reverseNumber(123)); // 321
  console.log(getWeekdayByNumber(7)); // Sunday