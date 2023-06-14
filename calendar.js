const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
const months = [
  'Jan', 'Feb', 'March', 'April', 'May', 'June',
   'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
];

document.body.onload = updateDay()

function updateDay(){
  const today = new Date();
  let date = today.getDate();
  const day = today.getDay();
  const month = today.getMonth();
  const year = today.getFullYear();
  date = checkTime(date);
  document.getElementById('date').innerHTML = date;
  document.getElementById('day').innerHTML = days[day];
  document.getElementById('month').innerHTML = months[month];
  document.getElementById('year').innerHTML = year;
}
function checkTime(i){
  if (i < 10){
    i = '0' + i;
  }
  return i;
}
