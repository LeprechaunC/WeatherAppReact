import React from 'react';
import logo from './logo.svg';
import Header from './components/header';  
import Footer from './components/footer';
import Banner from './components/banner'; 
import Nearbycities from './components/nearbycities';
import Scrollup from './components/scrollup';

   
import { useState, useEffect } from 'react';

import './components/header.css';
import './components/styles.css';
import './components/footer.css';
import './components/banner.css';
import './components/nearbycities.css';
import './components/scrollup.css';
   
 
function App() {
 

    
     return (
      
      <div className="App">
         <Header />
         <div className="this">   
         <Banner></Banner>
         <Nearbycities/>
        
         <Scrollup></Scrollup>
         <Footer></Footer>
          
          </div>
        <div className="fakecontent">
         </div>
         
 
        </div>
      
    
    );
  }
  
  export default App;