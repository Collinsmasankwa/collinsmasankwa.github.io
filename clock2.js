document.body.onload = startTime();

function startTime(){
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  setTimeout(startTime, 1000);
  document.getElementById('hours').innerHTML = h;
  document.getElementById('minutes').innerHTML = m;
  document.getElementById('seconds').innerHTML = s;
}
function checkTime(i){
  if (i < 10){
    i = '0' + i;
  }
  return i;
}
