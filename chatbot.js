const replies = [
  'Which topics interest you?',
  'There are amazing things I can do as a Language module, how may I assist you today!',
  'I can assist you with anything, just type in your prompt.',
  'Hey there, am a Chatbot designed by Collins Mokua. How may I help you today?',
  'Am currently being trained to take in responses.<br>I may provide information that may be incorrect at times.',
  'Feel free to ask anything.'
];

const greeting = [
  'Hi there!, How are you ? How may I assist you today!',
  'Hello!',
  'How are you',
  'Hello, how may I help you today!',
  'Am pleased to help you today, ask any question',
  'Hey there, am a Chatbot designed by Collins Mokua. How may I help you today?'
];

let usedReplies = [];
let usedGreetings = [];

let textarea = document.querySelector('#textarea');

textarea.addEventListener('keyup', ()=>{
  if (textarea.value.length == 0){
    textarea.style.height = '32px';
  } else {
    textarea.style.height = '60px';
  }
});

document.querySelector('#btn').addEventListener('click', ()=>{
  let chatArea = document.querySelector('.chat-flex');
  let new_p = document.createElement('p');
  let greetingsIndex = Math.floor(Math.random() * greeting.length);  /*gets the random index */

  new_p.innerHTML = `
        <div style="display: flex; justify-content: flex-end;">
            <div class="user-message" style="margin-top: -25px;">
                <p>${textarea.value}</p>
            </div>
        </div>
  `;
  if (textarea.value){
    chatArea.appendChild(new_p);
    let randomIndex = Math.floor(Math.random() * replies.length);

    // check to see if all replies have been used up and reset it
    if (replies.length === usedReplies.length){
      usedReplies = [];
    }

    // Ensure the selected response is not repeated until all responses are used.
    while (usedReplies.includes(randomIndex)) {
      randomIndex = Math.floor(Math.random() * replies.length);
    }
    usedReplies.push(randomIndex); // Add the selected response index to usedReplies array.

    // If the greetings are used all, then resets.
    if (greeting.length === usedGreetings.length){
      usedGreetings = [];
    }

    while(usedGreetings.includes(greetingsIndex)){
      greetingsIndex = Math.floor(Math.random() * greeting.length);
    }

    usedGreetings.push(greetingsIndex);

    if (textarea.value.toLowerCase().startsWith('hello') || textarea.value.toLowerCase().startsWith('hi')
      || textarea.value.toLowerCase().startsWith('hey') ||
       textarea.value.toLowerCase().startsWith('how are you')){
      let p = document.createElement('p');
      p.innerHTML = `
        <div style="display: flex; justify-content: flex-start;">
            <div class="chatbot-message" style="margin-top: -25px;">
                <p>${greeting[greetingsIndex]}</p>
            </div>
        </div>
      `;
      chatArea.appendChild(p);
      chatArea.scrollTop = chatArea.scrollHeight;
    } else {
      let p = document.createElement('p');
      p.innerHTML = `
        <div style="display: flex; justify-content: flex-start;">
            <div class="chatbot-message" style="margin-top: -25px;">
                <p>${replies[randomIndex]}</p>
            </div>
        </div>
      `;
      chatArea.appendChild(p);
      chatArea.scrollTop = chatArea.scrollHeight;
    }
    textarea.style.height = '32px';
    textarea.value = '';
  }
});

