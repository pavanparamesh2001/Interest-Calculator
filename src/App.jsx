
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {
  // Create state for holding the details from input box
  const [amount, setAmount] = useState(0);
  const [year, setYear] = useState(0);
  const [rate, setRate] = useState(0);
  const [interest, setInterest] = useState(0);
  

  console.log(amount, year, rate,interest );
  // Function to handle reset button click
  const handleReset = () => {
    setAmount(0);
    setYear(0);
    setRate(0);
    setInterest(0);
  };
  const handlecalculate=(e)=>{
    const output=amount*year*rate/100
    setInterest(output)
  }

  return (
    <div className="App">
      <div className='container'>
        <div className="header">
          <h1>Simple Interest Calculator</h1>
          <p>Calculate your Simple interest with us 💙</p>
        </div>
        <div className="total">
          <h1>&#8377;{interest} </h1>
          <p>Your Total Interest</p>
        </div>
        <div className="form">
          <form>
            <div className="input">
              <TextField id="filled-basic"className='m-3' label="Amount" onChange={(e) => setAmount(e.target.value)} variant="filled" />
              <TextField id="filled-basic" className='m-3' label="Year" onChange={(e) => setYear(e.target.value)} variant="filled" />
              <TextField id="filled-basic" className='m-3' label="Rate" onChange={(e) => setRate(e.target.value)} variant="filled" />
            </div>
            <div className="button">
              <Button onClick={e=>handlecalculate(e)} variant="contained" className='m-3'>Calculate</Button>
              <Button variant="outlined" onClick={handleReset}>Reset</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;