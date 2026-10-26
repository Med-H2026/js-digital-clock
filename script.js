let secElement =document.createElement('h1');
secElement.setAttribute('id','secondes');
document.querySelector('.digitalClock').insertBefore(secElement,document.getElementById('pmam'));


window.addEventListener('load',calculateTime);

function calculateTime(){
    let date = new Date();
    let dayNumber = date.getDay();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    let day = days[dayNumber];
    let ampm = hour >= 12 ? 'PM':'AM';
    hour = hour % 12; // hour always receive value less than 12
    hour = hour ? hour:'12' // if midnight or midnoon, it is gonna return 0
    hour = hour<10 ? '0'+hour : hour; // if hour less than 10, we display 0+hour (ex: 05 not onlt 5)
    min = min<10 ? '0'+min : min; // same 
    sec = sec<10 ? '0'+sec : sec;
    

    document.getElementById('day').innerHTML = day;
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = min;
    document.getElementById('secondes').innerHTML= sec;
    document.getElementById('pmam').innerHTML = ampm;
    setTimeout(calculateTime,1000);
 
}
