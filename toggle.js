function changeMode(button){
  const currentMode = document.body.classList.contains('light');
  if (currentMode){
    document.body.classList.remove('light');
    document.body.style.backgroundColor='black';
  }
  else{
    document.body.classList.add('light');
    document.body.style.backgroundColor='white';
  }
}
document.getElementById('toggle').addEventListener('click', changeMode);
