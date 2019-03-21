'use strict';

const myRequest = new XMLHttpRequest();

const submitBtn = document.querySelector('#submitBtn');

submitBtn.onclick = (e) => {
  e.stopPropagation();
  e.preventDefault();
  formData();
}

function formData(){
  let answers = document.querySelectorAll('.answer');
  let radioButtons = document.querySelectorAll('.is_correct');
  let response = [];

answers.forEach((oneAnswer, index) => {
    let answerCheckedPairs = {
      answer: oneAnswer.value,
      is_correct: radioButtons[index].checked === true ? 1 : 0
    }

    response.push(answerCheckedPairs);
  })
  console.log(response);

}