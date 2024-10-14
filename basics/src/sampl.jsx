import React from 'react';
import {useState} from 'react';
import './sampl.css'
const Sampl = () => {
let [usestate,updatestate]=useState(0)
const price=150;
let [submit,updatesubmit]=useState(false)
const Increment=()=>{
    updatestate(usestate+1)
}
const Decrement=()=>{
   if(usestate>0){
    updatestate(usestate-1)
   }
 
    
}
const Reset=()=>{
    updatestate(0)
   }
   let SubmitButton=()=>{
    updatesubmit(true)
   }
    return (
        <section><div><h1 >Order Now</h1></div>
        <div>


            <img src="./Pictures/biryani.jpg" alt="Biryani Image"/>
            <div>
            <button onClick={Decrement}>-</button>
            <h3> {usestate} </h3>
            <button onClick={Increment}>+</button>
            </div>
            <button onClick={SubmitButton}>Submit</button>
            <button onClick={Reset}>Reset</button>
        </div>
        {submit && (
        <div>
          <h2>Order Summary</h2>
          <p>Item: Biryani</p>
          <p>Price: ₹{price}</p>
          <p>Quantity: {usestate}</p> {/* Updated 'quantity' to 'usestate' */}
          <p>Total: ₹{price * usestate}</p>
        </div>
      )}</section>
        
    );
}

export default Sampl;
