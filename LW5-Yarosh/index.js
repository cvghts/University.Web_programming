//Завдання 1
const cat = {
    name: 'Bertie',
    breed: 'Cymric',
    color: 'white',
    greeting: function() {
      console.log('Meow!');
    }
  }
  
  const catName = cat['name'];
  cat.greeting();
  cat.color = 'black';
  //Завдання 2
  const myFavBand = {
    name: 'Океан Ельзи',
    nationality: 'України',
    genre: 'Різну',
    members: 5,
    formed: 1994,
    split: false,
    albums: [
      {name: 'Там, де нас нема', released: 1998},
      {name: 'Твій формат', released: 2003}
    ]
  }
  const bandInfo = `Моя улюблена група це ${myFavBand.name}, вона з ${myFavBand.nationality}. Вона створилася ${myFavBand.formed}, а розпалася ${myFavBand.split}. Ця група грає ${myFavBand.genre} музику. Їх альбом, ${myFavBand.albums[0].name}, випущений ${myFavBand.albums[0].released}.`;
   //Завдання 3
   function isSimpleObject(obj) {
    return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
  }
  //Завдання 4
  function isEmptyObject(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
//Завдання 5
function removeObjectProperty(obj, prop) {
    const newObj = Object.assign({}, obj);
    delete newObj[prop];
    return newObj;
  }
//Завдання 6
function compareObjects(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }  
//Завдання 7
function findIntersection(obj1, obj2) {
    const intersection = {};
    for (const key in obj1) {
      if (obj2.hasOwnProperty(key)) {
        if (obj1[key] === obj2[key]) {
          intersection[key] = obj1[key];
        }
      }
    }
    return intersection;
}