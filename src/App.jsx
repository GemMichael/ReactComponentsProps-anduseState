import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const decrement = () => {
    if (count => 0) {
      setCount(count - 1);
    }
  }

  const increment = () => {
      setCount(count + 1);
  }

  return (
    <>   
      <div className="card">
      <p>Count: {count} </p>
      <button onClick={decrement} disabled={count === 0}>Decrement</button>
       <button onClick={increment}>Increment</button>
      </div>
    </>
  );
}

export default App
