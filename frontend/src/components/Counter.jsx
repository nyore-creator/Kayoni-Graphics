import React, { useState } from 'react';

export default function Counter(){
  const [count, setCount] = useState(0);
  return (
    <section id="counter-section">
      <h2>Fun Counter Game</h2>
      <p id="counter">{count}</p>
      <div>
        <button id="increase" onClick={() => setCount(c => c + 1)}>Increase</button>
        <button id="decrease" onClick={() => setCount(c => c - 1)}>Decrease</button>
        <button id="reset" onClick={() => setCount(0)}>Reset</button>
      </div>
    </section>
  );
}
