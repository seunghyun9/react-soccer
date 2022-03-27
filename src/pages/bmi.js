import React,{useState} from "react";
import { useLinkClickHandler } from "react-router-dom";

export default function Bmi(){
    const[inputs,setInputs]=useState({})
    const {name,inch,weight}=inputs;//object Destructuring

    const handleChange = (e) => {
     e.preventDefault()
     const {value,name}=e.target;
     setInputs({...inputs,[name]:value})
    }
    const handleClick=(e)=>{
        e.preventDefault()
        const bmiRequest={name,inch,weight}
        alert(` 사용자이름: ${JSON.stringify(bmiRequest)}`)
    }

    return (<>
            
            <h1>Bmi 계산기</h1>
         
         <label htmlFor="">이름</label><br />
         <input type="text" name="name" onChange={handleChange}/><br />
         <label htmlFor="">키</label><br />
         <input type="text" name="inch" onChange={handleChange}/><br />
         <label htmlFor="">몸무게</label><br />
         <input type="text" name="weight" onChange={handleChange}/><br />
         <button onClick={handleClick}>Bmi 체크</button><br/>
         </>)
    
    
} 