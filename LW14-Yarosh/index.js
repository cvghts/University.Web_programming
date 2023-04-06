const btn = document.querySelector('#new-quote');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');

const url = 'https://type.fit/api/quotes';

const xhr = new XMLHttpRequest();
xhr.open('GET', url, true);

xhr.responseType = 'json';

xhr.send();

xhr.onload = function () {
  if (xhr.status != 200) {
    console.log(`Error ${xhr.status} : ${xhr.statusText}`);
  } else {
    const apiQuotesData = xhr.response;
    changeQuote(apiQuotesData);
  }
}

xhr.onerror = function () {
  console.log('Не вдалося виконати запит');
}

btn.addEventListener('click', xhr.onload)

function changeQuote(data) {
  btn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    quote.innerText = data[randomIndex].text;
    person.innerText = data[randomIndex].author;
  });
}