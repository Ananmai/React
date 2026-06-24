import React, { useEffect, useState } from 'react'
import Greeting from './Greeting';

export default function App() {
  // let name = "Gamana";
  const[name, setName] = useState("Chinnu");
  const[color, setColor] = useState("Pink");
  const[count, setCount] = useState(0);
  
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000)
  });

  return (
    <div>
      <Greeting name ={name} />
      <button onClick={() => setName("Anu")}>Click for change</button>
      <h2>My Fav Color is {color}!</h2>
      <button onClick={() => setColor("Black")}>Reavel Color</button>
      <h2>The Count is {count}!</h2>
      <button onClick={() => setCount(count + 1)}>count</button>
      <h2>The time starts now {count}!</h2>


    </div>
  );
}
