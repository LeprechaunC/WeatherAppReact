import React from 'react';
import logo from './logo.svg';
import Header from './components/header'; // Corrected import statement
import Footer from './components/footer';
import Banner from './components/banner'; 


import { useState, useEffect } from 'react';

import './components/header.css';
import './components/styles.css';
import './components/footer.css';
import './components/banner.css';
import './scripts/scripts.js';

 
 
function App() {
  
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
 <div className="informationText">
   {weather && city && (
    <h1>
     Weather in {weather.name} is {Math.round(weather.main.feels_like)} °C
   </h1>)}
  <input onChange={(e) => setCity(e.target.value)} type="text" placeholder="Capital of a country"></input>
  <button onClick={() => checkWeather()}>Go</button>

   
   </div>
  

    
     return (
      
      <div className="App">
         <Header />
         <Banner></Banner>
          <h2>ello</h2>
        <Footer></Footer>
      
      </div>
    );
  }
  
  export default App;