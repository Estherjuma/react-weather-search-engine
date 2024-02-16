import React from "react";
import "./Weather.css"

export default function Weather() {
    return (
      <div className="weather">
        <form>
        <div className="row">
         <div className="col-9">
            <input type="search" placeholder="Enter a city.." className="form-control" />
         </div>
         <div className="col-3">
           <button>Search</button>
         </div>
        </div>
        </form>
        <hr />
        <div className="row mt-4">
          <div className="col-8">
            <h1 className="city">Nairobi</h1>
            <ul>
              <li>Friday 15:45</li>
              <li>Scattered clouds</li>
              <li>Humidity: <strong>36%</strong></li>
              <li>Wind: <strong>6.17km/h</strong></li>
            </ul>
          </div>
          <div className="col-4">
            <h2><strong className="degrees">28</strong>&deg;C|&deg;F</h2>
            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png" alt="weather-app-icon" width="100%" />
          </div>
        </div>
      </div>
    );
}