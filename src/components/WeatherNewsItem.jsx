import React, { useState, useEffect } from "react";
import "../components/css/WeatherNewsItem.css";

function WeatherNewsItem() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Guwahati");
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const api = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=`;
        const apiKey = "73938f5472eb0ed76b4d598f4a164ae9";

        const response = await fetch(api + apiKey);
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error("City not found");
        }

        console.log(responseData);
        setData(responseData);
        setError(null);
      } catch (error) {
        setError(error.message);
        setData(null);
      }
    };

    getWeather();
  }, [city]);

  return (
    <>
      <div className="card">
        <div className="search">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button>
            <img src="images/search.png" />
          </button>
        </div>
        {data && (
          <div className="weather">
            {data.weather[0].main === "Clouds" && (
              <img src="images/clouds.png" className="weatherIcon" />
            )}
            {data.weather[0].main === "Haze" && (
              <img src="images/clouds.png" className="weatherIcon" />
            )}
            {data.weather[0].main === "Clear" && (
              <img src="images/clear.png" className="weatherIcon" />
            )}
            {data.weather[0].main === "Mist" && (
              <img src="images/mist.png" className="weatherIcon" />
            )}
            {data.weather[0].main === "Smoke" && (
              <img src="images/mist.png" className="weatherIcon" />
            )}
            {data.weather[0].main === "Drizzle" && (
              <img src="images/drizzle.png" className="weatherIcon" />
            )}
            {data.weather[0].main === "Rain" && (
              <img src="images/rain.png" className="weatherIcon" />
            )}
            {data.weather[0].main === "Humidity" && (
              <img src="images/humidity.png" className="weatherIcon" />
            )}
            {data.weather[0].main === "Snow" && (
              <img src="images/snow.png" className="weatherIcon" />
            )}
            {data.weather[0].main !== "Clouds" &&
              data.weather[0].main !== "Clear" &&
              data.weather[0].main !== "Mist" &&
              data.weather[0].main !== "Smoke" &&
              data.weather[0].main !== "Snow" &&
              data.weather[0].main !== "Humidity" &&
              data.weather[0].main !== "Haze" &&
              data.weather[0].main !== "Drizzle" &&
              data.weather[0].main !== "Rain" && (
                <img src="images/clear.png" className="weatherIcon" />
              )}
            {/* <img src="images/rain.png" className="weatherIcon" /> */}
            <h1 className="temp">{data.main.temp}°C</h1>
            <h2 className="city">{data.name}</h2>
            <div className="details">
              <div className="col">
                <img src="images/humidity.png" alt="" />
                <div>
                  <p className="humidity">{data.main.humidity}%</p>
                  <p className="humidityText">Humidity</p>
                </div>
              </div>
              <div className="col">
                <img src="images/wind.png" alt="" />
                <div>
                  <p className="wind">{data.wind.speed} km/h</p>
                  <p className="windText">Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default WeatherNewsItem;
