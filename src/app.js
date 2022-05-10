 
 
 
 
 let apikey = "65ebacab223e28df9f44762d8e4c4d11";
       
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apikey}&units=metric`;
     
 function displayTemperature(response){   
   let temperatureElement=document.querySelector("#temperature");
   let cityElement=document.querySelector("#city");
   let descriptionElement=document.querySelector("#description");
   let humidityElement=document.querySelector("#humidity");
   let windElement=document.querySelector("#wind");
   temperatureElement.innerHTML=Math.round
   (response.data.main.temp);
   cityElement.innerHTML=response.data.name;
   descriptionElement.innerHTML=response.data.weather[0].description;
   humidityElement.innerHTML=response.data.main.humidity;
    windElement.innerHTML= Math.round
    ( response.data.wind.speed);

       }

        axios.get(apiUrl).then(displayTemperature);
