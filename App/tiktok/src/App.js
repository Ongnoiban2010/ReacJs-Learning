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

  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState(() => {
    const storageJob = JSON.parse(localStorage.getItem('jobs')) ?? []; // dung ?? thay vi || vi biet chac ket qua qua tra ve null hoac undifine
    return storageJob;
  });

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
    setCheckbox( (prev) => {
      if (prev.includes(id)) {
        return prev.filter((el) => el !== id);
      } else {
        return [...prev, id];
      }
    });
  }

  const handleAddJob= () => {
    setJobs(prev => {
      const newJob = [...prev, job];
      localStorage.setItem('jobs', JSON.stringify(newJob));
      console.log(JSON.stringify(newJob));
      return newJob;
    }); // goi ham len lich trinh khi nao render lai App thi jobs moi nhan gia tri moi
    setJob('');
    console.log(jobs)
  }

  return (
    <div className="App">
      <div>
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
      </div>
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
          checked = {checkbox.includes(sour.id)}
          onChange = {() => handleCheck(sour.id)}
          />
          {sour.name}
        </div>
      )}
      <hr/>
      <input type="text" onChange={(e) => setJob(e.target.value)} value={job}/>
      <button onClick={handleAddJob}>Add</button>
      <ul style={{width: '200px', margin: '0 auto'}}>
        {jobs.map((value, index) => 
          <li key={index}>{value}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
