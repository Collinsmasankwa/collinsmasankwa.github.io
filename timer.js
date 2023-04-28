let counter = 0;
var myCount;

function start(){
  clearInterval(myCount);
  myCount = setInterval(count, 1000);
}
function count(){
  document.getElementById('time').innerHTML = counter += 1;
}

function stop(){
  clearInterval(myCount);
}

function reset(){
  clearInterval(myCount);
  document.getElementById('time').innerHTML = counter = 0;
}