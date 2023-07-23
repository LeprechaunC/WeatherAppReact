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
   
 
function App() {
  /*
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

   
  <Footer></Footer>
   </div>
         */
  

    
     return (
      
      <div className="App">
         <Header />
         <Banner></Banner>
        <div className="fakecontent">
          <h1>Welcome</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, rem! Magnam praesentium suscipit quas iusto cum. Optio consequatur quis dignissimos aliquid, enim corrupti rerum quibusdam veritatis molestias a doloremque, labore in quaerat temporibus nam est odit odio pariatur eligendi voluptatum id dolorem nesciunt. Maxime, iure earum? Deserunt ad possimus iste tempora. Nostrum illum modi quis esse rem ut alias, illo accusantium explicabo temporibus laborum voluptatem doloremque voluptatibus vitae voluptatum sed perferendis minus sint perspiciatis cupiditate nihil. Illo voluptatibus repudiandae quisquam dicta, eos quia commodi voluptate optio tempore a possimus aspernatur provident voluptatem quis et! Maxime ut nesciunt numquam possimus molestiae.</p>
        </div>
         
 
        </div>
      
    
    );
  }
  
  export default App;