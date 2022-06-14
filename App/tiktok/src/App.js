import './App.css';
import { useState } from 'react';

var arr = [100, 200, 300];

function App() {

  const [counter, setCounter] = useState(() => {
    var total = arr.reduce((total, current) => total + current);
    console.log(total);
    return total;
  });

  const handleIncrease = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
