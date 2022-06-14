import './App.css';
import { useState } from 'react';

var arr = [100, 200, 300];

var giffs = [
  'CPU i9',
  'RAM 32GB RGB',
  'RGB keyboard'
]

var cource = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'JavaScript'
  },
  {
    id: 3,
    name: 'ReactJS'
  }
]

function App() {

  const [info, setInfo] = useState({
    name: 'Chu Duc Doan',
    age: 25,
    address: 'Ha Noi'
  });

  const [counter, setCounter] = useState(() => {
    var total = arr.reduce((total, current) => total + current);
    console.log(total);
    return total;
  });

  const [gift, setGift] = useState();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [checked, setChecked] = useState();
  const [checkbox, setCheckbox] = useState([]);

  const handleIncrease = () => {
    setCounter(counter + 1);
    // setInfo({
    //   ...info,
    //   bio: 'Yeru màu hồng'
    // });
    setInfo(pre => {
      return {
        ...pre,
        bio: "Yêu màu hồng"
      }
    })
  }

  const randomGift = () => {
    const index = Math.floor(Math.random()*giffs.length);
    console.log(index)
    setGift(giffs[index]);
  }

  const handleSubmit = () => {
    console.log({
     name,
      email
    })
  }

  const handleCheck = (id) => {
    setCheckbox(pre => {
      const isChecked = checkbox.includes(id)
      if(isChecked) {
        return checkbox.filter(item => item !== id)
      } else {
        return [...pre, id];
      }
    });
  }

  console.log(checkbox)

  return (
    <div className="App">
      <h1>{counter}</h1>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <h2>{gift || 'Chưa có phần thưởng'}</h2>
      <button onClick={randomGift}>Lấy thưởng</button>
      <br></br>
      <input  type="text" onChange={e => setName(e.target.value)} value={name}/>
      <br/>
      <input type="text" onChange={e => setEmail(e.target.value)}  value={email}/>
      <br/>
      <button onClick={handleSubmit}>Change</button>
      <hr/>
      {cource.map((sour) => 
        <div key={sour.id}>
          <input type="radio" checked={checked === sour.id} onChange={() => setChecked(sour.id)}/>
          {sour.name}
        </div>
      )}
      <hr/>
      {cource.map((sour) => 
        <div key={sour.id}>
          <input 
          type="checkbox" 
          checked={checkbox.includes(sour.id)} 
          onChange={() => handleCheck(sour.id)}/>
          {sour.name}
        </div>
      )}
    </div>
  );
}

export default App;
