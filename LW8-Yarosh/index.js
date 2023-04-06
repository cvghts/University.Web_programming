const body = document.querySelector('body');
const openButton = document.createElement('button');
openButton.id = 'open-btn';

const openButtonSpan = document.createElement('span');
openButtonSpan.innerText = "Where's Modal Window?";
openButton.appendChild(openButtonSpan);

const modalContainerElement = document.createElement('div');
modalContainerElement.id = 'modal-container';

const modalElement = document.createElement('div');
modalElement.id = 'modal';

const modalP = document.createElement('p');
modalP.innerText = 'Here I am!';
modalElement.appendChild(modalP);

const closeButton = document.createElement('button');
closeButton.id = 'close-btn';
closeButton.innerText = 'x';
modalElement.appendChild(closeButton);

modalContainerElement.appendChild(modalElement);

body.appendChild(openButton);
body.appendChild(modalContainerElement);

const closeBtn = document.getElementById('close-btn');
const openBtn = document.getElementById('open-btn');
const modalContainer = document.getElementById('modal-container');

openButton.addEventListener('click', function() {
  modalContainer.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  modalContainer.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == modalContainer) {
    modalContainer.style.display = 'none';
  }
});
