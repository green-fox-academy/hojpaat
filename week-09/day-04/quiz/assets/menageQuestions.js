'use strict';


const myRequest = new XMLHttpRequest();

const submitBtn = document.querySelector('#submitBtn');

submitBtn.onclick = (e) => {
  e.stopPropagation();
  e.preventDefault();
  sendForm();
}

function formData() {
  let answers = document.querySelectorAll('.answer');
  let radioButtons = document.querySelectorAll('.is_correct');
  
  return {
    question: document.getElementById('question').value,
    answers: createAnswerCheckArray(answers, radioButtons)
  }

}

function createAnswerCheckArray(inputAnswers, inputRadioButtons){
  let answerCheckArray = [];

  inputAnswers.forEach((oneAnswer, index) => {
    let answerKey = `answer_${index + 1}`;
    let answerCheckedPairs = {
      [answerKey]: oneAnswer.value,
      is_correct: inputRadioButtons[index].checked === true ? 1 : 0
    }

    answerCheckArray.push(answerCheckedPairs);
  })
  return answerCheckArray;
}

function sendForm(){
  myRequest.open('POST', '/api/questions');
  myRequest.onload = (e) => {
    clearForm();
    console.log(JSON.parse(e.target.responseText))}
  myRequest.setRequestHeader('Content-Type', 'application/json');
  myRequest.send(JSON.stringify(formData()))
}

function clearForm(){
  let formFields = document.querySelectorAll('input');
  formFields.forEach((field, index, mainArray) =>{
    index < mainArray.length - 1 ? field.value = '' : '';
  })
}