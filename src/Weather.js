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
            <input type="submit" value="search" className="btn btn-primary" />
         </div>
        </div>
        </form>
        <div className="row">
          <div className="col-9">
            <h1>Nairobi</h1>
            <ul>
              <li>Fri 15:45</li>
              <li>Scattered clouds</li>
              <li>Humidity: 36%</li>
              <li>Wind: 6.17km/h</li>
            </ul>
          </div>
          <div className="col-3">
            <h2>28&deg;c</h2>
            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png" alt="weather-app-icon" />
          </div>
        </div>
      </div>
    );
}