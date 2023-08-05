import React, { PureComponent, ReactNode } from 'react'
import { useState, useEffect} from 'react';
import vietnamImage from './vietnamImage.png';
import moment from 'moment';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, Scatter, LabelList, AreaChart, ResponsiveContainer, Label} from 'recharts';


function Banner() {
 
 
  const [chartData, setChartData] = useState([
    { time: '4:00 pm', temperature: 0, humidity: 28 + '%', image: 'image1' },
    { time: '7:00 pm', temperature: 0, humidity: 25 + '%', image: 'image2' },
    { time: '10:00 pm', temperature: 0, humidity: 5 + '%', image: 'image3' },
    { time: '1:00 am', temperature: 0, humidity: 11 + '%', image: 'image4' },
    { time: '4:00 am', temperature: 0, humidity: 15 + '%', image: 'image5' },
  ]);

  

  const [weather, setWeather] = useState<any>();
  const [temperatures, setTemperatures] = useState<any>();
  const [time, setTime] = useState<any>();
  const [weatherIcon, setWeatherIcon] = useState<string>('');
  let tempScale = "metric"; //metric or imperial
  
  async function checkWeather() {
    const apiKey = '7539cbfc6424763dcca2ca5c49a62707'; // Replace with your correct API key
    let city = 'Riga';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${tempScale}`;
    const hourlyUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${tempScale}`;
    try {
       
      const response = await fetch(url);
      const hourlyResponse = await fetch(hourlyUrl);
      const data = await response.json();
      const hourlyData = await hourlyResponse.json();
  
      
      
      console.log(data);
      console.log(hourlyData);
      setWeather(data);
      setTemperatures(hourlyData);
 

      const timezone = data.timezone;
      const weather_average_temp = data.main.feels_like;
      const timezoneInMinutes = timezone / 60;
      const currTime = moment().utcOffset(timezoneInMinutes).format('h:mm A');
      setTime(currTime);
 
  

      setWeatherIcon(data.weather[0].icon + '@2x.png');
 
    } catch (error) {
      console.log('Failed to connect to API:', error);
    }
  
  }

  useEffect(()=>
  {
    checkWeather();
},[tempScale]);
  
  useEffect(() => {
    
    if (temperatures && temperatures.list && temperatures.list.length > 0) {
      const newChartData = chartData.map((dataPoint, index) => {
        console.log("index: " + index);
        return { ...dataPoint, temperature: (Math.round(temperatures.list[index]?.main?.temp ?? 0 ))};
      });
      setChartData(newChartData);
    }
    
  }, [temperatures]);
 
 
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
       
        class CustomizedLabel extends PureComponent<any> {
          render() {
            const imageWidth = 70; // Adjust the image width as needed
            const imageHeight = 70; // Adjust the image height as needed
            
        
            const { x, y, value } = this.props;
            return (
              <> 
          <g></g>
              <foreignObject x={x - imageWidth / 2} y={y - imageHeight - 30} width={imageWidth} height={imageHeight}>
          <img src={vietnamImage} width={imageWidth} height={imageHeight} alt="Vietnam Image" />
        </foreignObject>
 
             <text x={x} y={y} dy={-10} fill={"white"} fontSize={30} textAnchor="middle" fontWeight={600}>
             
        {value}°
        
      </text>
      </>
            );
          }
        }
       return (
        
    <>
      <div className="weather-log">
        <div className="hidden">
          <div className="all-div-containers">
            {/* weather-contents */}
            <div className="weather-contents">
              <div className="stats">
                <p id="weather">CURRENT WEATHER</p>
                {weather && <p id="city">{weather.name}</p>}
                <p>{time} TUESDAY, JULY 18</p>
              </div>
              <div className="temp-feelslike-log">
                <div className="temp-log">
                  {weather && <p>{Math.round(weather.main.temp)}°</p>}
                  </div>
                <div className="vertical-bar"></div>
                <div className="feelslike-log">
                  <div>
                    <img className="weather-logo" src={"https://openweathermap.org/img/wn/" + weatherIcon} alt="Weather Icon" />
                  </div>
                  <div>
                    <p>Clear</p>
                    {weather && <p className="feels-like-par">Feels like {Math.round(weather.main.feels_like)} °C</p>}
                  </div>
                </div>
              </div>
              <button className="full-forecast">FULL FORECAST</button>
            </div>
            <div className="today-analytics">
               
          <div className="analysis-graph">
          
          <h3>NEXT 12 HOURS</h3>

        <ResponsiveContainer width="100%" height="100%">
          
        
        <LineChart   data={chartData} 
        margin={{
            top: 100,
            right: 30,
            left: 20,
            bottom: 80,
          }}>
            <Tooltip cursor={false} active={false}  />
             <Line
            
              dataKey="temperature"
              stroke="white"
              isAnimationActive={false}
              dot={{ r: 5, stroke: 'white' }}  
              strokeWidth={2}
              label={<CustomizedLabel />}
              
            />
            
               
               <LabelList
                  dataKey="image"
                  position="right" 
                  fill="black" 
                    
                 />
         <XAxis xAxisId="0" dataKey="time"  tickLine={false} axisLine={false} stroke="grey" fontSize={19} opacity={0.7} interval="preserveStartEnd" dy={-10}    /> 
         <XAxis xAxisId="1" dataKey="humidity"   interval="preserveStartEnd" stroke='white' dy={10}   /> 

 
          </LineChart>
           </ResponsiveContainer>
                  </div>
                 </div>
                </div>
             </div>
          </div>
      </>
  );
}

export default Banner;