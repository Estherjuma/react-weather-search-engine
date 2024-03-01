import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <div className="row">
          <div className="col-6">
            <h1 className="city">{props.data.city}</h1>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              <li>{props.data.description}</li>
              <li>
                Humidity: <strong>{props.data.humidity}%</strong>
              </li>
              <li>
                Wind: <strong>{props.data.wind}km/h</strong>
              </li>
            </ul>{" "}
            
          </div>
        </div>
        <hr />
        <div className="row mb-1">
          <div className="col-6">
            <img src={props.data.icon} alt={props.data.description} />
          </div>
          <div className="col-6">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    );
}