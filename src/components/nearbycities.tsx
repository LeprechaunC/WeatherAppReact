import React from 'react'
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function Nearbycities() {
  return (
    <div className="cities-container">
      <h1>
      Next 5 Days
     </h1>
     <div className='row-analysis'>
      <p>Monday</p>
      <p>Clear sky 39</p>
     </div>
     <div className='row-analysis'>
     <p>Tuesday</p>
      <p> Dark sky 23</p>
     </div>
     <div className='row-analysis'>
     <p>Wednesday</p>
      <p>Clear sky 39</p>
     </div>
     <div className='row-analysis'>
     <p>Thursday</p>
      <p>Clear sky 39</p>
     </div>
     <div className='row-analysis'>
     <p>Friday</p>
      <p>Clear sky 39</p>
     </div>
  </div>
  )
}

export default Nearbycities;