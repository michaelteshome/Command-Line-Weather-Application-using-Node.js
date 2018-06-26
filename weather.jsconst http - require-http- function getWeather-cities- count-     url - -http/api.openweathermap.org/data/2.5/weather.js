const http = require('http');
function getWeather(cities, count){
    url = `http://api.openweathermap.org/data/2.5/weather?q=${cities},${count}&units=imperial&appid=b5dff48153f8422dfcff472f8d109497`;
    let body = "";
    let weathers;
    try{
      const request = http.get(url, (response)=>{
          response.on('data', (d)=>{
               body += d.toString();
          });
          
          response.on('end', ()=>{
                 weathers = JSON.parse(body);
                 console.log(`Current Weather in ${cities} is: ${weathers.main.temp} degrees Fahrenheit`);
          });
        
      });
      
    }
    catch(e){
      console.error(e.message);
    }
  
}
module.exports.get = getWeather;
