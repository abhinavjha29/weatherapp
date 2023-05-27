const http = require('http') ;
const fs = require('fs') ;
const requests = require('requests') ;

const homefile = fs.readFileSync("app.html" ,"utf-8") ;
const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);
    console.log(temperature) ;
  
    return temperature;
  };
const server = http.createServer((req , res)=>{
    if(req.url==='/') {
        requests('https://api.openweathermap.org/data/2.5/weather?q=patna&appid=95391914f70d9370e32b4d060da7c6b9&units=metric', )
.on('data', (chunk)=> {
    const jdata = JSON.parse(chunk) ;
    const arrdata = [jdata] ;
   const realTimedata = arrdata.map((val)=>
    replaceVal(homefile , val)).join("") ;
 //console.log(realTimedata) 
     res.write(realTimedata) ;
     //console.log(weather[0].main)
  
})
.on('end', (err)=> {
  if (err) return console.log('connection closed due to errors', err);
  res.end() ;
 
  //console.log('end');
});

    }
   

})

server.listen(2200) ;