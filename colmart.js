var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
menu.onclick = function (){
  if (nav.style.right == '-250px'){
    nav.style.right = '0';
    nav.style.background = 'rgba(0, 210, 0, 1)';
    nav.style.display = 'block';
  }
  else{
    nav.style.right = '-250px';
    nav.style.background = 'transparent';
    nav.style.display = 'none';
  }
}

const user = localStorage.getItem('username');

if (user){
  document.getElementById('user').innerHTML = `Hello @${user}`;
  document.getElementById('home').style.display = 'none';
  document.getElementById('logout').style.display = 'block';
}
else{
  document.getElementById('home').style.display = 'block';
  document.getElementById('logout').style.display = 'none';
}

function logout(){
  document.getElementById('home').style.display = 'block';
  document.getElementById('logout').style.display = 'none';
  document.getElementById('user').innerHTML = '';
}
