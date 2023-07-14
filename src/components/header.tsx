import { useEffect } from 'react';
 function Header() {
  useEffect(() => {
    function dropdownMenus(e: MouseEvent) {
      const isDropdownButton = (e.target as HTMLElement).matches('[data-dropdown-button]');
      if (!isDropdownButton && (e.target as HTMLElement).closest('[data-dropdown]') !== null) return;

      let currentDropdown: Element | null;
      if (isDropdownButton) {
        currentDropdown = (e.target as HTMLElement).closest('[data-dropdown]');
        if (currentDropdown) {
          currentDropdown.classList.toggle('active');
        }
      }
      document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
      });
    }

    document.addEventListener('click', dropdownMenus);

    return () => {
      document.removeEventListener('click', dropdownMenus);
    };
  }, []);

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <nav className="Header">
        <span className="logo">WeatherGuru</span>
        <div className="all-links"> 

        <ul>
          <div className="dropdown" data-dropdown>
            
            <button data-dropdown-button className="link">Weather <span id="icon" className="material-symbols-outlined">
expand_more
</span></button>
            <div className="dropdown-menu-main information-grid">
              <div>
               
                <div className="dropdown-heading"><h2>Weather</h2>
                  <div className="dropdown-links">
                    <a href="#">Today</a>
                    <a href="#">Hourly</a>
                     <a href="#">Monthly</a>
                  </div>
                </div>
              </div>
              <div className="dropdown-heading"> <h2>Around the globe</h2>
                  <div className="dropdown-links">
                  <a href="#">Hurricane Tracker</a>
                    <a href="#">Tsunami Tracker</a>
                  </div>
                  </div>
                  </div>
            </div>
            <div>
        
          </div>
          <li><a href="contact.asp">Contact</a></li>
          <li><a href="about.asp">About Us</a></li>

        </ul>
 
        </div>
      </nav>
      
    </>
  );
}

export default Header;
