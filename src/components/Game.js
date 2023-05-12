import React from 'react'
import { data } from './Data'
import { useState } from 'react'
import {useForm} from 'react-hook-form' 
import {useNavigate } from "react-router-dom";


function Game(props) {
    const navigate=useNavigate();

    let [score, setScore] = useState(0);
    let [currentQuestion,setCurrentQuestion]=useState(0)
    const submit=(selectedOption)=>{
        setCurrentQuestion(currentQuestion + 1);
        // console.log(selectedOption.option)
        // console.log(data[currentQuestion].answer);
        if(selectedOption.option === data[currentQuestion].answer) {
            score=score+1
            setScore(score);
            // console.log(score)
            // console.log('correct answer')
        }
        if(currentQuestion===8){
            // console.log(score)
            navigate('/score')
        }
        // console.log(score)
    }

    const{register,handleSubmit,formState:{errors}}=useForm()

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <h1>{data[currentQuestion].question}</h1>
                <div className="form-check">
                    <input className="form-check-input" {...register('option',{required:true})} value='1' type="radio" />
                    <label className="form-check-label" >
                        {data[currentQuestion].options[0]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" {...register('option',{required:true})} value='2' type="radio"/>
                    <label className="form-check-label">
                        {data[currentQuestion].options[1]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" {...register('option',{required:true})} value='3' type="radio"/>
                    <label className="form-check-label" >
                        {data[currentQuestion].options[2]}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" {...register('option',{required:true})} value='4' type="radio"/>
                    <label className="form-check-label" >
                        {data[currentQuestion].options[3]}
                    </label>
                </div>
                <button type='submit' onClick={()=>props.getValue(score)}>Submit</button>
            </form>
        </div>
    )
}

export default Game

