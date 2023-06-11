var score = 0;

function validateQuiz1(){
  // validation for quiz 1
  let formData = document.forms['question']['question1'].value;
  if (formData == 'Central Processing Unit'){
    document.getElementById('a1').style.color = 'green';
    score += 1;
  }
  else if (formData != 'Central Processing Unit'){
    document.getElementById('a1').style.color = 'black';
  }
  if (formData == 'Cooling Processor Unit'){
    document.getElementById('a2').style.color = 'red';
  }
  else if (formData != 'Cooling Processor Unit'){
    document.getElementById('a2').style.color = 'black';
  }
  if (formData == 'Central Packing Unit'){
    document.getElementById('a3').style.color = 'red';
  }
  else if (formData != 'Central Packing Unit'){
    document.getElementById('a3').style.color = 'black';
  }
  if (formData == 'Central Process Unit'){
    document.getElementById('a4').style.color = 'red';
  }
  else if (formData != 'Central Process Unit'){
    document.getElementById('a4').style.color = 'black';
  }
}



function validateQuiz2(){
  //validation for quiz2
  let formData2 = document.forms['question']['question2'].value;
  if (formData2 == 'Union'){
    document.getElementById('question2a2').style.color = 'green';
    score += 1;
  }
  else if (formData2 != 'Union'){
    document.getElementById('question2a2').style.color = 'black';
  }
  if (formData2 == 'Extend'){
    document.getElementById('question2a1').style.color = 'red';
  }
  else if (formData2 != 'Extend'){
    document.getElementById('question2a1').style.color = 'black';
  }
  if (formData2 == 'sort'){
    document.getElementById('question2a3').style.color = 'red';
  }
  else if (formData2 != 'sort'){
    document.getElementById('question2a3').style.color = 'black';
  }
  if (formData2 == 'reverse'){
    document.getElementById('question2a4').style.color = 'red';
  }
  else if (formData2 != 'reverse'){
    document.getElementById('question2a4').style.color = 'black';
  }
}


function validateQuiz3(){
  //validation for quiz3
  let formData3 = document.forms['question']['question3'].value;
  if (formData3 == 'setdiff1d'){
    document.getElementById('question3a4').style.color = 'green';
    score += 1;
  }
  else if (formData3 != 'setdiff1d'){
    document.getElementById('question3a4').style.color = 'black';
  }
  if (formData3 == 'add'){
    document.getElementById('question3a1').style.color = 'red';
  }
  else if (formData3 != 'add'){
    document.getElementById('question3a1').style.color = 'black';
  }
  if (formData3 == 'delete'){
    document.getElementById('question3a2').style.color = 'red';
  }
  else if (formData3 != 'delete'){
    document.getElementById('question3a2').style.color = 'black';
  }
  if (formData3 == 'clear'){
    document.getElementById('question3a3').style.color = 'red';
  }
  else if (formData3 != 'clear'){
    document.getElementById('question3a3').style.color = 'black';
  }
}


function validateQuiz4(){
  //validation for quiz4
  let formData4 = document.forms['question']['question4'].value;
  if (formData4 == 'Number'){
    document.getElementById('question4a2').style.color = 'green';
    score += 1;
  }
  else if (formData4 != 'Number'){
    document.getElementById('question4a2').style.color = 'black';
  }
  if (formData4 == 'Float'){
    document.getElementById('question4a1').style.color = 'red';
  }
  else if (formData4 != 'Float'){
    document.getElementById('question4a1').style.color = 'black';
  }
  if (formData4 == 'Integer'){
    document.getElementById('question4a3').style.color = 'red';
  }
  else if (formData4 != 'Integer'){
    document.getElementById('question4a3').style.color = 'black';
  }
  if (formData4 == 'Set'){
    document.getElementById('question4a4').style.color = 'red';
  }
  else if (formData4 != 'Set'){
    document.getElementById('question4a4').style.color = 'black';
  }
}


function validateQuiz5(){
  //validation for quiz5
  let formData5 = document.forms['question']['question5'].value;
  if (formData5 == 'Hash maps'){
    document.getElementById('question5a1').style.color = 'green';
    score += 1;
  }
  else if (formData5 != 'Hash maps'){
    document.getElementById('question5a1').style.color = 'black';
  }
  if (formData5 == 'Linked lists'){
    document.getElementById('question5a2').style.color = 'red';
  }
  else if (formData5 != 'Linked lists'){
    document.getElementById('question5a2').style.color = 'black';
  }
  if (formData5 == 'stack'){
    document.getElementById('question5a3').style.color = 'red';
  }
  else if (formData5 != 'stack'){
    document.getElementById('question5a3').style.color = 'black';
  }
  if (formData5 == 'queues'){
    document.getElementById('question5a4').style.color = 'red';
  }
  else if (formData5 != 'queues'){
    document.getElementById('question5a4').style.color = 'black';
  }
}



//function to validate all the questions
function validate(){
  validateQuiz1();
  validateQuiz2();
  validateQuiz3();
  validateQuiz4();
  validateQuiz5();
  disableQuizInputs();
  const result = document.getElementById('result');
  result.innerHTML  = 'You scored ' + `${score}` + ' out of 5';
  //document.querySelector('#result').focus();
  document.getElementById('btn').disabled = true;
}


function disableQuizInputs(){
  document.getElementById('q1a1').disabled = true;
  document.getElementById('q1a2').disabled = true;
  document.getElementById('q1a3').disabled = true;
  document.getElementById('q1a4').disabled = true;

  document.getElementById('q2a1').disabled = true;
  document.getElementById('q2a2').disabled = true;
  document.getElementById('q2a3').disabled = true;
  document.getElementById('q2a4').disabled = true;

  document.getElementById('q3a1').disabled = true;
  document.getElementById('q3a2').disabled = true;
  document.getElementById('q3a3').disabled = true;
  document.getElementById('q3a4').disabled = true;

  document.getElementById('q4a1').disabled = true;
  document.getElementById('q4a2').disabled = true;
  document.getElementById('q4a3').disabled = true;
  document.getElementById('q4a4').disabled = true;

  document.getElementById('q5a1').disabled = true;
  document.getElementById('q5a2').disabled = true;
  document.getElementById('q5a3').disabled = true;
  document.getElementById('q5a4').disabled = true;
}

// function to refresh the page or allow reattempt of the questions...
function refresh(){
  window.location.reload();
  //fix this later...
  document.querySelector('#q1a1').focus();
}
