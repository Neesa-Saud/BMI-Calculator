import React, { useState } from 'react';
function Calculator()
{
     const[weight,setWeight]=useState('0');
     const[height,setHeight]=useState('0');
     const[bmi,setBmi]=useState('');
     const[message,setMessage]=useState('');
    let calcBmi =(e)=>
    { 
        e.preventDefault();
        //for bmi calculation
        if(height===0 || weight===0)
        {
            alert('Enter valid weight and height');
        }
        else
        {
            let bmi = (weight / (height * height) * 703);
            setBmi(bmi.toFixed(1));
        }
         // Logic for message
 
      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }

    //for reloading the page
    let Reload =()=>
    {
        window.location.reload();
    }
    return(
<div className='Calculator'>
    <div className='container'>
      <h1 className='Center'>BMI Calculator</h1>
    <form onSubmit={calcBmi}>
      <div>
      <label>Weight(lbs)</label>
      <input type='text' placeholder='Enter your weight' value={weight} onChange={(e)=> setWeight(e.target.value)}/>
      </div>
      <div>
      <label>Height(inches)</label>
      <input type='text' placeholder='Enter your height' value={height} onChange={(e)=> setHeight(e.target.value)}/>
      </div>
       <div>
        <button className='btn' type='submit'>Submit</button>
        <button className='btn' onClick={Reload}>Reload</button>
       </div>
    </form>
    </div>
    <div className='center'>
      <h3>Your BMI is : {bmi}</h3>
      <p>{message}</p>
    </div>
    </div>
    )
}
export default Calculator;