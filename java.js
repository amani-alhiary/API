var APIKey = "08d6c2493a01dd58abe438a8af4adb1e";

document.getElementById("country").addEventListener('change',function(){
               //  fetch Api//
               var city=document.querySelector("#country").value;
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=08d6c2493a01dd58abe438a8af4adb1e&units=metric`
)

  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);


   const d = new Date();

document.querySelector('.wind .value').textContent=(data.wind.speed)
document.querySelector('.humidity .value').textContent=(data.main.humidity+"%");
document.querySelector('.pressure .value').textContent=(data.main.pressure+"%") ;
document.querySelector('.weather-temp').textContent=(data.main.temp.toFixed(0)+"°C");
document.querySelector('.location').textContent=city
document.querySelector('.date-container .date-dayname').textContent=d.toLocaleString("en-us", { weekday: "long" });
document.querySelector('.date-container .date-day').textContent=d.toLocaleDateString();
document.querySelector('.weather-desc').textContent=data.weather[0].main 

})})
