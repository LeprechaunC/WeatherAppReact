import React from 'react'
import { useState } from 'react';
import vietnamImage from './vietnam-banner.jpg';

function Banner() {
    const [weather, setWeather] = useState<any>();
    const [city, setCity] = useState<any>();
    
   

 
   
   
     async function checkWeather() {
      
   
      const apiKey = 'ba1d7800b488de5bb878f4a48811efd2'; // Replace with your correct API key
    
       
      try{
   
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setWeather(data);
        
     
        } catch(error) 
        {
        console.log("Failed to connect to API.", error)
        }
      

        }
         
        // <input onChange={(e) => setCity(e.target.value)} type="text" placeholder="Capital of a country"/>
        //<button onClick={() => checkWeather()}>Go</button>
     
   return (
    <>
    <div className="Container">  
 
    <div className="centeredLeft"> 
     <div className="informationText">
     {weather && city && (
      <div className="data-container">
       <h1>Weather in {weather.name} is {Math.round(weather.main.feels_like)} °C </h1>
      </div>)}
      <div className="entry-container"> 
   
    </div>
    </div>
     <table className="data-table">
  <tr>
    <th>My  Locations</th>
    <th>Sundays</th>
    <th>Mondays</th>
    <th>Tuesdays</th>
    <th>Wednesdays</th>
   

  </tr>
  <tr>
    <td>Riga</td>
    <td> <img src="http://openweathermap.org/img/w/10d.png"></img>21°</td>
    <td> <img src="http://openweathermap.org/img/w/11d.png"></img>11°</td>
    <td> <img src="http://openweathermap.org/img/w/09d.png"></img>16°</td>
    <td> <img src="http://openweathermap.org/img/w/01d.png"></img>18°</td>
  </tr>
  <tr>
    <td>Vilnius</td>
    <td> <img src="http://openweathermap.org/img/w/03d.png"></img>24°</td>
    <td> <img src="http://openweathermap.org/img/w/04d.png"></img>16°</td>
    <td> <img src="http://openweathermap.org/img/w/02d.png"></img>32°</td>
    <td> <img src="http://openweathermap.org/img/w/11d.png"></img>27°</td>
  </tr>
 
 
</table> 
    </div>
    </div>
     </>
    );
}
export default  Banner;



 