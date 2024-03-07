import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();

    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();

    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        {" "}
        <h2 className="mt-5">
          <strong>
            {Math.round(props.celsius)}
            <a href="/">°C</a>

            <a href="/" onClick={showFahrenheit}>
              |°F
            </a>
          </strong>
        </h2>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <div>
        {" "}
        <h2 className="mt-5">
          <strong>
            {Math.round(fahrenheit)}

            <a href="/" onClick={showCelsius}>
              °C
            </a>

            <a href="/">|°F</a>
          </strong>
        </h2>
      </div>
    );
  }
}
