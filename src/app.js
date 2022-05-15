 function formatdate (timestemp){
   let date=new Date(timestemp);
   let hours=date.getHours();
   if(hours<10){
     hours=`0${hours}`;
   }
   let minutes=date.getMinutes();
   if(minutes<10){
     minutes=`0${minutes}`;
   }

   let days=["Sanday", "Monday","Tuesday","Wenesday","Thursday","Friday","Saturday"]
   let day= days[date.getDay()];

   
return`${day} ${hours}:${minutes}`;


 }
 
     
 function displayTemperature(response){  

   let temperatureElement=document.querySelector("#temperature");
   let cityElement=document.querySelector("#city");
   let descriptionElement=document.querySelector("#description");
   let humidityElement=document.querySelector("#humidity");
   let windElement=document.querySelector("#wind");
   let dateElement=document.querySelector("#date");
   let iconElement=document.querySelector("#icon");

   temperatureElement.innerHTML=Math.round
   (response.data.main.temp);
   cityElement.innerHTML=response.data.name;
   descriptionElement.innerHTML=response.data.weather[0].description;
   humidityElement.innerHTML=response.data.main.humidity;
    windElement.innerHTML= Math.round
    ( response.data.wind.speed);
dateElement.innerHTML=formatdate(response.data.dt*1000);
iconElement.setAttribute(
  `src`,
  `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
       };
      //  iconElement.setAttribute("alt",data.weather[0].description);

function search (city){
 let apikey = "65ebacab223e28df9f44762d8e4c4d11";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function handelsubmit(event){
  event.preventDefault();
  let cityInputeElement=document.querySelector("#city-input");
  search(cityInputeElement.value);
}

search("rasht");

let form=document.querySelector("#serch-form");
form.addEventListener("submit",handelsubmit);