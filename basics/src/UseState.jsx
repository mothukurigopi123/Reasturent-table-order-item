import React from 'react';
import {useState} from 'react'
import './button1.css'
const UseState = () => {
    let [count,countchange]=useState(0);
    let Increment=()=>{
        countchange(count+1);
    }
    let Decrement=()=>{
        if(count>0)
        { 
            countchange(count-1);
        }
       
    }
    let Reset=()=>{
        countchange(0);
    }
    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    );
}

export default UseState;
