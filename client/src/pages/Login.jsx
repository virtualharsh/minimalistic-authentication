import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:3000/api/login', { mail, password },{withCredentials:true});
            navigate('/dashboard')
        } catch (error) {
            setMail('')
            setPassword('')
            console.log(error);

            alert(error.response?.data?.message || "Something went wrong!");
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form method='post' onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setMail(e.target.value)}
                    value={mail}
                    type="email"
                    name="mail"
                    placeholder='Email'
                    required
                    autoComplete='off'
                    id="mail" /> <br /><br />

                <input
                    onChange={(e) => { setPassword(e.target.value) }}
                    value={password}
                    type="password"
                    name="password"
                    placeholder='password'
                    required
                    id="password" /> <br /><br />


                <input
                    type="submit"
                    value="Login" />
            </form>
        </div>
    )
}

export default Login;