import React from 'react'
import { useState } from "react";

const Jokes = () => {

  const [randomJoke, setRandomJoke] = useState({});

  const fetchRandomJoke = () => {
    fetch("http://localhost:4000/random")
      .then(response => response.json())
      .then(console.log('Jokes.js from /random'))
      .then(data => {setRandomJoke(JSON.parse(data))})
      .catch((error) => console.log('error from Jokes.js 🥸 ::', error));
  }
  
  // useEffect(() => {
  //   fetchRandomJoke()
  // }, []) 
  
   console.log(' joke 🤡 :::', randomJoke);
   console.log(' joke.value 🤡 :::', randomJoke.value);


  return (
    
    <div>
            

      <ol className='Joke'>
          {randomJoke.value} 
          {/* <button className='Button' onClick={handleClick}> */}
          <button className='Button' onClick={fetchRandomJoke}>
            get new joke
          </button>
      </ol>

      
    </div>
  )
}

export default Jokes;