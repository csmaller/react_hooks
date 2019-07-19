import React, { useState, useEffect } from 'react';

const Home = ()=>{

    //HOOKS  Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
    //useEffect
   // Similar to componentDidMount and componentDidUpdate:
   //use AFTER the module refreshes to do any other functionality with state vars
   useEffect(() => {
        document.title = `You clicked ${counter} times`;

    });
  
  return (
    <div>
        <h1>HOOKS: basic Example</h1>
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
      </div>

      <h1>HOOKS: useEffect()</h1>
        <div>
            <p>You clicked {counter} times</p>
            <button onClick={() => setCounter(counter + 1)}>
                Click me to set the Document Tab Contuer
            </button>
      </div>

    </div>
  );
}
export default Home;