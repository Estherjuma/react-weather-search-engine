import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Nairobi" />
        <footer>
          This project was coded by
          <a href="http://github.com/Estherjuma" target="blank">
            Esther Juma
          </a>{" "}
          , and is{" "}
          <a
            href="https://github.com/Estherjuma/react-weather-search-engine"
            target="blank"
          >
            {" "}
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
