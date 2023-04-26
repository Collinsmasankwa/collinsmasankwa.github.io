function displayTime(){
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('h').innerHTML = h;
  document.getElementById('m').innerHTML = m;
  document.getElementById('s').innerHTML = s;
  if(h > 12){
      document.getElementById('am/pm').innerHTML = 'PM';
  }
  else{
      document.getElementById('am/pm').innerHTML = 'AM';
  }
  setTimeout(displayTime, 1000);
}
function checkTime(i){
  if (i < 10){i = '0' + i;}
  return i;
}
