import React, { useState } from 'react'
import { mathsdata } from './MathsData'
import { useForm } from "react-hook-form"; 
import { useNavigate } from "react-router-dom";

function Maths(props) {
    const navigate=useNavigate()
    let[currentQ,setCurrentQ]=useState(0)
    let[mathsScore,setMathsScore]=useState(0)

    // const submitmaths=(selectedOption)=>{
    //     setCurrentQ(currentQ + 1);
    //     if(selectedOption.option===mathsdata[currentQ].answer){
    //         console.log("hi")
    //         mathsScore=mathsScore+1
    //         setMathsScore(mathsScore)
    //     }
    //     if(currentQ===5){
    //         props.getValue(mathsScore)
    //         alert(mathsScore)
    //         navigate('/score')
    //     }
    // }
    const submitmaths=(selectedOption)=>{
        if(selectedOption.option === mathsdata[currentQ].answer) {
            mathsScore = mathsScore + 1;
            setMathsScore(mathsScore);
        }
        currentQ=currentQ+1
        setCurrentQ(currentQ)
        if(currentQ===5){
            props.getValue(mathsScore);
            navigate('/score')
        }
        // console.log(score)
    }
    const{register,handleSubmit,formState:{errors}}=useForm()
    return (
        <div>
        <form onSubmit={handleSubmit(submitmaths)}>
            <h1>{mathsdata[currentQ].question}</h1>
            <div className="form-check">
                <input className="form-check-input" {...register('option',{required:true})} value='1' type="radio" />
                <label className="form-check-label" >
                    {mathsdata[currentQ].options[0]}
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" {...register('option',{required:true})} value='2' type="radio" />
                <label className="form-check-label" >
                    {mathsdata[currentQ].options[1]}
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" {...register('option',{required:true})} value='3' type="radio" />
                <label className="form-check-label" >
                    {mathsdata[currentQ].options[2]}
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" {...register('option',{required:true})} value='4' type="radio" />
                <label className="form-check-label" >
                    {mathsdata[currentQ].options[3]}
                </label>
            </div>
            <button type="submit">Next</button>
        </form>
        </div>
    )
}

export default Maths