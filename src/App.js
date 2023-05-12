import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Game from "./components/Game";
import Score from "./components/Score";
import Maths from "./components/Maths";
import { useState } from "react";

function App() {
  let [data,setData]=useState('')
  let [name,setName]=useState('')
  const getValue=(datafromgame)=>{
    setData(datafromgame)
  }

  let updateName=(getName)=>{
    setName(getName)
  }
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="" element={<Home updateName={updateName}/>}>  </Route>
        <Route path="/game" element={<Game getValue={getValue}/>}>  </Route>
        <Route path="/maths" element={<Maths getValue={getValue}/>}></Route>
        <Route path="/score" element={<Score data={data} name={name}/>}>  </Route>
      </Routes>
    </div>
  );
}

export default App;

