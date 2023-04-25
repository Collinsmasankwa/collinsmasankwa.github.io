function changeBg() {
  let bg = document.getElementById('div');
  let colors = [
    'blue', 'yellow', 'red', 'green', 'pink', 'gray', 'maroon', 'purple', 'indigo', 'violet', 'lightblue'
    , 'coral', 'magenta', 'white', 'brown', 'cyan', 'orange', 'beige'
  ];
  for (let i = colors.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    let k = colors[i];
    colors[i] = colors[j];
    colors[j] = k;
  }
  for (let x of colors){
      bg.style.backgroundColor=`${x}`;
  }
}
function on(){
  document.body.style.color='white';
  document.body.style.backgroundColor='black';
}
function off(){
  document.body.style.color='black';
  document.body.style.backgroundColor='white';
}
function ON(){
  let on = document.getElementById('screen');
  on.style.display='block';
}
function OFF(){
  let off = document.getElementById('screen');
  off.style.display='none';
}
