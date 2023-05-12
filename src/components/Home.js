import React, { useState } from 'react'
import {useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; 

// function Home(props) {
//     const navigate = useNavigate()
//     let [userName,setUserName]=useState('')

//     const{register,handleSubmit,formState:{errors}}=useForm()

//     const submit=(data)=>{
//         console.log(data)
//     }

//     return (
//         <div>
//             <form action="" onSubmit={handleSubmit(submit)}>
//                 <img src="https://i.pinimg.com/474x/cc/18/9c/cc189ca9c6dc75dcc530bf9bc1c32fcc.jpg" alt="" />
//                 <div className="div-name">
//                     <label htmlFor="" className='h3 fw-bolder mb-4'><center>Enter Your Name</center></label>
//                     <input type="text" className="center-block mb-4" {...register('option',{required:true})}/>
//                     <button type="button" class="btn btn-dark btn-lg fw-bolder" onClick={()=>navigate('/game')}>Start Playing!!</button>
//                 </div>
//             </form>
//         </div>
//     )
// }


// export default Home


function Home(props) {

    const {register,handleSubmit,formState:{errors}} = useForm()
    const navigate = useNavigate();
    const onSubmitUserName = (data) => {
        // alert('Form Submitted')
        console.log(data.username)
        props.updateName(data.username)
    };

    const onFormSubmit = () => {
        navigate("/game");
    }

    const routeToDiffPagemaths=()=>{
        navigate('/maths')
    }

    // const routeToDiffPagegames=()=>{
    //     navigate('/game')
    // }


    return (
    <div>
        <img src="https://i.pinimg.com/474x/cc/18/9c/cc189ca9c6dc75dcc530bf9bc1c32fcc.jpg" alt="" />
        <div className='col-11 col-sm-8 col-md-6 mx-auto'>

        <form onSubmit={handleSubmit(onSubmitUserName)}>
            <div className='mb-3'>
                <label htmlFor=''>Username</label>
                <input type='text' id="" className='form-control' {...register('username',{required:true,minLength:4})} />
            </div>
            <button type="submit">Click here to Register Username</button>
            <h1>Choose Your Module to Play Quiz</h1>
        </form>

        <form onSubmit={handleSubmit(onFormSubmit)}>
            <button type="submit" className='btn btn-outline-secondary fw-bolder w-100'>Games</button>
        </form>

        <form onSubmit={handleSubmit(routeToDiffPagemaths)}>
            <button type="submit" className='btn btn-outline-secondary fw-bolder w-100'>Maths</button>
        </form>
        </div> 
    </div>
    )
}


export default Home
