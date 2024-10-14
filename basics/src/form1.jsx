import React,{useState} from 'react';

const Form1 = () => {
    const [usename,useupdate]=useState("");
    const [usenamede,useupdatedetails]=useState("");
    const getusername=(e)=>{
        useupdate(e.target.value)
        console.log(e.target.value)
    }
    const Submit=(ev)=>{
       ev.preventDefault()
        useupdatedetails(usename)
    }
    return (
        <div>
           
            <div> <h1>Hello,{usenamede}</h1></div>
            <form onSubmit={Submit}>
            <input type="text" placeholder="Enter Your Name" onChange={getusername}/><br/>
            <button type="submit">Submit</button>
            </form>
      
        </div>
    );
}

export default Form1;
