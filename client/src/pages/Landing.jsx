import React from 'react'
import { useNavigate } from 'react-router-dom';

const Landing = () =>{
    console.log("hi");
    
    const navigate = useNavigate()
    return (
        <div>
            <h1>Landing page</h1>
            <button 
                onClick={()=>navigate('/register')}
            >Signup </button>
            <button 
                onClick={()=>navigate('/login')}
            >Login</button>
        </div>
    )
}

export default Landing;