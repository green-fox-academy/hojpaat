'use strict';

const myRequest = new XMLHttpRequest();

let form = document.getElementById('addAnimal')

let possibleSpecies = document.getElementById("possibleSpecies");

let radioBtns = document.querySelectorAll('.radioBtns')

let submitBtn = document.getElementsByTagName('button')[0];

let checkedRadioBtn = undefined;
let animalName = document.getElementById('name');

function createSpeciesButton(inputValue, inputId) {
  let newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'spaciesRadioBtn');
  let newRadioButton = document.createElement('input');
  newRadioButton.setAttribute('type', 'radio');
  newRadioButton.setAttribute('name', 'species');
  newRadioButton.setAttribute('class', 'radioBtns');
  newRadioButton.setAttribute('id', inputId);
  newRadioButton.setAttribute('value', inputValue);
  newDiv.appendChild(newRadioButton);
  createLabel(inputValue, inputId, newDiv);
  possibleSpecies.appendChild(newDiv);
}

function createLabel(labelText, inputId, parentElement) {
  let newBreak = document.createElement('br');
  let newLabel = document.createElement('label');
  newLabel.setAttribute('for', inputId);
  newLabel.innerText = labelText;
  parentElement.appendChild(newLabel);
  parentElement.appendChild(newBreak);
}

function radioButtonSpecies() {
  myRequest.open('GET', '/species');
  myRequest.onload = () => {
    let allAnimals = JSON.parse(myRequest.responseText);
    for (let i = 0; i < allAnimals.length; i++) {
      createSpeciesButton(allAnimals[i].speciesName, allAnimals[i].id);
    }
  }
  myRequest.send();
}

function formData() {
  let dataFromForm = {
    name: animalName.value,
    speciesId: parseInt(checkedRadioBtn.id)
  }
  return dataFromForm;
}

function sendForm() {
  myRequest.open('POST', '/animals');
  myRequest.onload = (e) => {
  }
  myRequest.setRequestHeader('Content-Type', 'application/json');
  myRequest.send(JSON.stringify(formData()));
}

window.onload = () => {
  radioButtonSpecies();

  form.addEventListener('click', (e) => {
      checkedRadioBtn = e.target;
    console.log(checkedRadioBtn.id);
  })

  submitBtn.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    sendForm();
    console.log('Button is working');
  }
}
