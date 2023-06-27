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
