import React, {useState} from "react";
import axios from "axios"
import "./Weather.css"

export default function Weather(props) {
    let [weatherData, setWeatherData]= useState({ready:false})
function handleResponse(response) {
    console.log(response)
    setWeatherData({
      ready: true,
      city: response.data.city,
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
    });
}
if (weatherData.ready) {
   return (
     <div className="weather">
       <form>
         <div className="row">
           <div className="col-9">
             <input
               type="search"
               placeholder="Enter a city.."
               className="form-control"
             />
           </div>
           <div className="col-3">
             <button>Search</button>
           </div>
         </div>
       </form>
       <hr />
       <div className="row mt-4">
         <div className="col-8">
           <h1 className="city">{weatherData.city}</h1>
           <ul>
             <li>Friday 11:45</li>
             <li>{weatherData.description}</li>
             <li>
               Humidity: <strong>{weatherData.humidity}%</strong>
             </li>
             <li>
               Wind: <strong>{weatherData.wind}km/h</strong>
             </li>
           </ul>
         </div>
         <div className="col-4">
           <h2><strong>{Math.round(weatherData.temperature)}</strong>&deg;C|&deg;F</h2>
           <img
             src={weatherData.icon}
             alt= {weatherData.description}
           />
         </div>
       </div>
     </div>
   );    
}else{
    let apiKey = "15b046dc320ab53a013bbof2tfa365eb"
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)

    return(
        <p>loading...</p>
    )
}
}