import React from 'react'
import { useState, useEffect} from 'react';
import vietnamImage from './vietnam-banner.jpg';
import moment from 'moment';

function Banner() {
  const [weather, setWeather] = useState<any>();
  const [time, setTime] = useState<any>();
  const [weatherIcon, setWeatherIcon] = useState<string>('');

  async function checkWeather() {
    const apiKey = '7539cbfc6424763dcca2ca5c49a62707'; // Replace with your correct API key
    let city = 'Moscow';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);

      const timezone = data.timezone;
      const weather_average_temp = data.main.feels_like;
      const timezoneInMinutes = timezone / 60;
      const currTime = moment().utcOffset(timezoneInMinutes).format('h:mm A');
      setTime(currTime);
      setWeather(data);

      setWeatherIcon(data.weather[0].icon + '@2x.png');
    } catch (error) {
      console.log('Failed to connect to API.');
    }
  }

  useEffect(() => {
    checkWeather();
  }, []);
     
        
        const observer = new IntersectionObserver((entries) =>{
          entries.forEach((entry) => 
          
          {
            if(entry.isIntersecting) 
            {
               entry.target.classList.add('show');
            } else
            {
              entry.target.classList.remove('show');
            }
          });
        });
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el)=>observer.observe(el));
        // <input onChange={(e) => setCity(e.target.value)} type="text" placeholder="Capital of a country"/>
        //<button onClick={() => checkWeather()}>Go</button>
        
        
   return (
    
    <>
      <div className="weather-log">
        <div className="hidden"> 
        <div className='all-div-containers'> 
        <div className="weather-contents">
          <div className="stats">
            <p id="weather">CURRENT WEATHER</p>
            {weather && <p id="city">{weather.name}</p>}
            
            <p>
              {time} TUESDAY, JULY 18
            </p>
          </div>
          <div className="temp-feelslike-log">
            <div className="temp-log">17°</div>
            <div className="vertical-bar"></div>
            <div className="feelslike-log">
              <div>
       
                <img className='weather-logo' src={"https://openweathermap.org/img/wn/" + weatherIcon} alt="Weather Icon" />
              </div>
              <div>
                <p>Clear</p>
                {weather && <p className="feels-like-par">Feels like {Math.round(weather.main.feels_like)} °C</p>}
              </div>
            </div>
          </div>
          <button className="full-forecast">Full Forecast</button>
        </div>
        <div className="today-analytics">
          <h3>NEXT 12 HOURS</h3>
          <div className="analytics-contents">
            <div>
              <div>
                <div>
                  <img src="https://openweathermap.org/img/wn/10d@2x.png"></img>
                </div>
                <div>
                  15°
                </div>
                <div>
                  dot
                </div>
                <div>
                4:00 pm
                </div>
                
                </div>
                <div>
                <img src="https://openweathermap.org/img/wn/10d@2x.png"></img>
                </div>
                <div>
                  18 °
                </div>
                <div>
                  dot
                </div>
                <div>
                7:00 pm
                </div>

                <div>
                <img src="https://openweathermap.org/img/wn/02d@2x.png"></img>
                </div>
                <div>
                  21°
                </div>
                <div>
                  dot 2
                </div>
                <div>
                10:00 pm
                </div>

                <div>
                <img src="https://openweathermap.org/img/wn/03d@2x.png"></img>
                </div>
                <div>
                  23°
                </div>
                <div>
                  dot 3
                </div>
                <div>
                1:00 am
                </div>

                <div>
                <img src="https://openweathermap.org/img/wn/09d@2x.png"></img>

                </div>
                <div>
                  25°
                </div>
                <div>
                  dot 3
                </div>
                <div>
                4:00 am
                </div>
     
     
                  
        </div>
          </div>
      </div>
    </div>
  </div>
</div>
     
    </>
  );
}

export default Banner;