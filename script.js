const passwordCharacters = [
    'a', 'b','c','d','e','f',
    'g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
     '!','@','#','$','%','^','&','*','(',')',
     '1','2','3','4','5','6','7','8','9','0'
];
for (let i = passwordCharacters.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    let k = passwordCharacters[i];
    passwordCharacters[i] = passwordCharacters[j];
    passwordCharacters[j] = k;
}
function generate()  {
  let text = document.getElementById('length');
  document.getElementById('show').innerHTML = passwordCharacters.slice(0, text.value).join('');
}

function copy()  {
  let text = document.getElementById('show').innerText;
  let elem = document.createElement('textarea');
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  document.execCommand('copy');
  document.body.removeChild(elem);
  alert('password copied');
}
