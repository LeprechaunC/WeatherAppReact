
 
 import { useEffect } from 'react';
 import logo from './logo-main.png';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

 
let isdown = true;

function hideMenu() {
 
  const navLinks = document.querySelectorAll<HTMLElement>('.links li a ');
  if(isdown != true) {
  isdown = true;
  navLinks.forEach(element => {
  
    element.style.setProperty('display', 'grid'); 
    
    })
   
  
  }
  else 
  {
    if(isdown == true) {
      navLinks.forEach(element => {
      isdown = false;
      element.style.setProperty('display', 'none', ''); 


    })
    }
  }
}
 function headerAnim()
{
  const header = document.body.querySelectorAll<HTMLElement>("header");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  header.forEach(element => 
    {
      element.style.setProperty('padding','1rem 2rem');
    })
}
else 
{
  header.forEach(element => 
   {
  element.style.setProperty('padding','2rem');
   })
}}




window.onscroll = function() {headerAnim()};


  

 
 function Header() {
    
  return (
    
    <>
    
      <meta content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no' name='viewport'></meta>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <nav>
  <header className="header">
    <div className="contents"> 
    <ul className="links">
      <li className="logo"><img className="header-logo" alt="logo" src={logo}></img></li>
      
      <li><a href="#">WEATHER</a></li>
      <li><a href="#">TECHNOLOGIES</a></li>
      <li><a href="#">INDUSTRIES</a></li>
      <li><a href="#">ABOUT</a></li>
      <li><a href="#" id="button-header" >CONTACT US</a></li>
     
     </ul>
    <span id="menu-button" onClick={hideMenu} className="material-symbols-outlined">
    menu
    </span>
    </div>
  </header>
  <div className="spacer"></div>
</nav>

</>
    
  );
}

export default Header;
