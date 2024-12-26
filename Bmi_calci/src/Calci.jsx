import React, { useState } from 'react'

const Calci = () => {
    const [height,setHeight]=useState("")
    const [weight,setWeight]=useState("")
    const [bmi,setBmi]=useState(null)
    const [bmiStatus,setBmiStatus]=useState("")
    const [errorMsg,setErrorMsg]=useState("")
const handleChange = () => {
    // /d-means only digit allowed
    const isValidHeight =/^\d+$/.test(height)
    const isValidWeight = /^\d+$/.test(weight)
    //in input field height weight iruthathuna
    if(height && weight){
        const hm=height/100;
        const bmiValue = weight / (hm * hm);
        setBmi(bmiValue.toFixed(2));
        if(bmiValue<18.5){
            setBmiStatus("Underweight")
        }
        else if(bmiValue>=18.5 && bmiValue<24.9){
            setBmiStatus("Normal Weight")
    }
    else if(bmiValue>=25 && bmiValue<29.9){
        setBmiStatus("Over Weight")
}

else{
    setBmiStatus("Obese")
}
setErrorMsg("")

}
else{
    setBmi(null);
    setBmiStatus("");
    setErrorMsg("please Enter a valid numeric values")
}



}
const handleClear=()=>{
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
    setErrorMsg("");
    
}

  return (
    <div className='container'>
    <div className='image'></div>
    <div className='whole'>
      
       

      <h1>BMI CALCULATOR</h1>
      <br />
     
      <div className='inp'>
        <div>
        <label>Height (in cm):</label>
        <br/>
        <input type="number" id="height" name="height" value={height} 
        onChange={(e)=>setHeight(e.target.value)}/>
        
        </div>
        <br />
        <div>
        <label>Weight (in kg):</label>
        <br/>
        <input type="number" id="weight" name="weight" value={weight}
        onChange={(e)=>setWeight(e.target.value)}/>
        </div>
      </div>
      <br />
      <div>
      <button id='calculate'  onClick={handleChange}>Calculate BMI</button>
      <button id='clear' onClick={handleClear}>Clear</button>
{bmi !==null &&(
     <div className='result'>
     <p>Your BMI is:{bmi}</p>
     <p>Status:over {bmiStatus}</p>
  

   </div>
)}
  <p className='error'>{errorMsg}</p>
      </div>
     
    </div>
    </div>
  )
}

export default Calci;