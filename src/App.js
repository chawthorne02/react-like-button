
import './App.css';
import React, { useState } from 'react';




function App() {

//  function incrementCount() {
//     setCount(count + 1)
//     if (setCount <= 1);         
//  }



const[count, setCount] = useState(0)

 const incrementCount = () => {
  setCount(count + 1)
 }

 const countText = () => {
  if (count === 0 || count > 1) {
  return `${count} likes`
 } else {
  return `${count} like`
 }

}

 
  


  return (
    <div className="App">
      
      <button onClick={incrementCount}>{countText()} </button> {count === 1 ? 'Like' : 'Likes'}

    </div>
  );
}
// {count === 1 ? 'Like' : 'Likes'}

export default App;
