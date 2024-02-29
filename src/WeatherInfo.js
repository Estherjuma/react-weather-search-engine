import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return ( 
        <div className="WeatherInfo">
       <div className="row mt-4">
         <div className="col-8">
           <h1 className="city">{props.data.city}</h1>
           <ul>
             <li><FormattedDate date={props.data.date} /></li>
             <li>{props.data.description}</li>
             <li>
               Humidity: <strong>{props.data.humidity}%</strong>
             </li>
             <li>
               Wind: <strong>{props.data.wind}km/h</strong>
             </li>
           </ul>
         </div>
         <div className="col-4">
           <h2><strong>{Math.round(props.data.temperature)}</strong>&deg;C|&deg;F</h2>
           <img
             src={props.data.icon}
             alt= {props.data.description}
           />
         </div>
       </div>
       </div>
       )
}