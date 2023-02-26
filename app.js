
// Dipak Kumal MERN stack Developer

// Accessing

let hours = document.getElementById('hrs');
let minutes = document.getElementById('min');
let second = document.getElementById('sec');
let session = document.getElementById('session');


// Creating function to build digital clock
const digitalClock = () =>{
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();

    if(hrs >= 12){
        session.innerHTML = "PM";
    }else{
        session.innerHTML = "AM";
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }
    hours.innerHTML = hrs;
    minutes.innerHTML = min
    second.innerHTML = sec;
}

setInterval(digitalClock,10)