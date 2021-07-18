var handHr = document.getElementById("handHr");
var handMin = document.getElementById("handMin");
var handSec = document.getElementById("handSec");

function initClock(){

var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();


var hourDeg = 30*hour+min/2;
//(12hr=360deg, 1hr=30deg, h hr =30 h, 

// 60min =30 deg, 1min = 1/2 deg, m min = 1/2 deg, m= m/2 , (30h+m/2)
var minDeg = min*6;//(60min=360 deg, 1min =6 deg, m min = 6*m)
var secDeg = sec*6; //((60Sec=360Deg , 1sec=360/60 =6deg, s sec = 6*sec)

handHr.style.transform = ' rotate(' + hourDeg + 'deg)';
handMin.style.transform = ' rotate(' + minDeg + 'deg)';
handSec.style.transform = 'rotate(' + secDeg + 'deg)';

setTimeout(initClock,1000);
};

initClock();