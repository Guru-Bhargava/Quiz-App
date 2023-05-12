import React from 'react'
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate=useNavigate()
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Quiz-App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active text-white" onClick={()=>navigate('')} >Home</a>
                    </li>
                    <li className="nav-item dropdown">
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default NavBar