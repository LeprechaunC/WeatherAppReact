import React from 'react';
import logo from './logo.svg';
import Header from './components/header'; // Corrected import statement
import Footer from './components/footer';
import { useState, useEffect } from 'react';

let data;
 
 
 
function App() {
  const [weather, setWeather] = useState<any>();

  useEffect(() => {
 
   async function checkWeather() {
 
    const lat = '56.9677'; 
    const lon = '24.1056'; 
    const apiKey = 'ba1d7800b488de5bb878f4a48811efd2'; // Replace with your correct API key
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
    try{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setWeather(data)
 
    } catch(error) 
    {
    console.log("Failed to connect to API.")
    }
    }
    checkWeather();
  }, []);
 
   return (
    <div className="App">
       <Header />
       {weather && <h1>Weather in {weather.name} is {weather.main.feels_like} °C</h1>}
       <Footer></Footer>
    
    </div>
  );
}

export default App;
