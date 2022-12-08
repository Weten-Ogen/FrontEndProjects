const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
 
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll('.deadline-format h4');
  
  let tempDate = new Date(),
  tempYear = tempDate.getFullYear(),
  tempMonth = tempDate.getMonth(),
  tempDay = tempDate.getDate() ;

  function timeFormat(x){
    if(x >= 10){
        return x;
    }
    else{
        return `0${x}`;
    }
  }
  




  const futureDate = new Date(2022,11,8,18,0,0);
  const year = futureDate.getFullYear();
  const hours =  timeFormat(futureDate.getHours());
  const mins = timeFormat(futureDate.getMinutes());
  const secs = timeFormat(futureDate.getSeconds());
  const month = months[futureDate.getMonth()];
  const weekday = weekdays[futureDate.getDay()];
  giveaway.textContent = `giveaway ends on ${weekday} ${month} ${year} ${hours}:${mins}`;



  const futureTime = futureDate.getTime();

  function getRemaininTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    console.log(today);

    // calculating the days, hr , mins left
    const oneday = 24 * 60 * 60 * 1000;
    const onehr = 60* 60 * 1000;
    const onemin = 60 * 1000;

    
    let days = t / oneday;
    days = Math.floor(days);
    let hours = Math.floor((t % oneday) / onehr);
    let mins = Math.floor((t % onehr )/ onemin);
    let secs = Math.floor((t % onemin)/ 1000 );
    const values = [days,hours, mins,secs];
    
    function format(item) {
        if(item > 10) {
            return item =  `0${item}`;
        }
        return item;
    }
    items.forEach(function(item,index){
        item.innerHTML = values[index]

   })
  }

  let countdowm = setInterval(getRemaininTime, 1000);
  getRemaininTime();
  