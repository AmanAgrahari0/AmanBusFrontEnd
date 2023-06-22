import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Authentication.css'
function Login() {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        phone: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const userLogin = (e)=>{
        e.preventDefault();
        axios.post(`http://localhost:3500/api/customer/login`, userData)
        .then((res)=>{
            alert(res.data.message);
            localStorage.setItem('customer', JSON.stringify(res.data.result))
            navigate('/')
        })
    }

    return (
        <div className='signup-section'>
            <div className="signup">
                <div className="image">
                    {/* <img src={require('./pic.png')} alt="" /> */}
                </div>
                <div className="form">
                    <form onSubmit={userLogin} method="post">
                        <div className="phone">
                            <input value={userData.phone} name='phone' onChange={handleChange} type="text" placeholder='Phone' />
                        </div>
                        <div className="password">
                            <input value={userData.password} name='password' onChange={handleChange} type="password" placeholder='Password' />
                        </div>

                        <div className="submit-btn">
                            <input type="submit"  />
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login