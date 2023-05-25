let currentdate = document.getElementById("date") ;
let weathercon = document.getElementById("weathercon") ;
let tempStatus = "sunny" ;

const getcurrentday = () =>{
    var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        let currentday = new Date() ;
        let day = weekday[currentday.getDay()] ;
        return day ;
    } ;


const getcurrentTime =() => {
    let months = [
        "Jan" ,
        "Feb" ,
        "Mar" ,
        "Apr" ,
        "May" ,
        "Jun" ,
        "Jul" ,
        "Aug" ,
        "Sep" ,
        "Oct" ,
        "Nov" ,
        "Dec"
    ] ;
    var currentTime = new Date() ;
    var month = months[currentTime.getMonth()+1] ;
    var date = currentTime.getDate() ;
    let hour = currentTime.getHours() ;
    let min = currentTime.getMinutes() ;
    let period = "AM" ;
    if(hour>11) {
        period= "PM" ;
    if(period==="PM") {
        hour -= 12 ;
    }
    }
    if (min<10) {
        min = "0" +min ;
    }
    return `${month} ${date} | ${hour}:${min}${period}` 
}

currentdate.innerHTML = getcurrentday()  +" | "+ getcurrentTime() ; 
