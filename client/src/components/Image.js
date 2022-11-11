import React from 'react'
import chucky from './chucknorris_logo_coloured_small@2x.png';

const Image = () => {
  return (
    <div>
      <img src={chucky} alt="chuck norris"></img>
      {/* <img src={chucky2} alt="chuck norris"></img> */}
    </div>
  )
}

export default Image;
