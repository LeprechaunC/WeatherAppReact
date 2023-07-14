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
        
 
     
   return (
    <>
    <div className="Container">  
    <img  className="bannerImage" src={vietnamImage}></img>
    <div className="centeredLeft"> 
     <div className="informationText">
     {weather && city && (
      <h1>
       Weather in {weather.name} is {Math.round(weather.main.feels_like)} °C
     </h1>)}
    <input onChange={(e) => setCity(e.target.value)} type="text" placeholder="Capital of a country"/>
    <button onClick={() => checkWeather()}>Go</button>
    </div>
    </div>
    </div>
    </>
    );
}
export default  Banner;



 