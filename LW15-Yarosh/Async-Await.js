//Завдання 2
function withConstructor(num){
    return new Promise((resolve, reject) => {
        if (num === 0){
            resolve('zero');
        } else {
            resolve('not zero');
        }
        });
    }

        withConstructor(0)
        .then((resolveValue) => {
        console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
    });
  
  // Write your code below:
async function withAsync(num) {
    if (num === 0) {
        return 'zero';
    } else {
        return 'not zero';
    }
}
  

//Завдання 3
const brainstormDinner = require('./library.js');

// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  });
}

// async/await version:
async function announceDinner() {
  try {
    const dinnerChoice = await brainstormDinner();
    console.log(`I'm going to make ${dinnerChoice} for dinner.`);
  } catch (error) {
    console.log(error);
  }
}
announceDinner();

//Завдання 4
const shopForBeans = require('./library.js');

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

const shopForBeans = require('./library.js');

//Завдання 5
const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

// Write your code below:
async function makeBeans() {
  const type = await shopForBeans();
  const isSoft = await soakTheBeans(type);
  const dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}
makeBeans();

//Завдання 6
const cookBeanSouffle = require('./library.js');

// Write your code below:
async function hostDinnerParty() {
  try {
    const souffle = await cookBeanSouffle();
    console.log(`${souffle} is served!`);
  } catch (error) {
    console.log(error);
    console.log('Ordering a pizza!');
  }
}
hostDinnerParty();

//Завдання 7
let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js');

// Write your code below:
async function serveDinner() {
  const vegetablePromise = steamBroccoli();
  const starchPromise = cookRice();
  const proteinPromise = bakeChicken();
  const sidePromise = cookBeans();

  const vegetable = await vegetablePromise;
  const starch = await starchPromise;
  const protein = await proteinPromise;
  const side = await sidePromise;

  console.log(`Dinner is served. We're having ${vegetable}, ${starch}, ${protein}, and ${side}.`);
}
serveDinner();

//Завдання 8
let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js');

// Write your code below:
async function serveDinnerAgain() {
  const foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
}
serveDinnerAgain();

