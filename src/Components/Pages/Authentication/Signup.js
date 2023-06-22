import React, { useState } from 'react'
import './Authentication.css'
import axios from 'axios'
function Signup() {

    const [userData, setUserData] = useState({
        f_name: "",
        l_name: "",
        phone: "",
        password: "",
        address: ""
    })

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setUserData({
            ...userData, 
            [name]: value
        })
    }

    const registerUser = (e)=>{
        e.preventDefault();
        axios.post(`http://localhost:3500/api/customer/signup`, userData)
        .then((res)=>{
            alert(res.data.message);
            window.location.reload();
        })
        
    }

    return (
        <div className='signup-section'>
            <div className="signup">
            <div className="image">
                    {/* <img src={require('./pic.png')} alt="" /> */}
                </div>
                <div className="form">
                    <form onSubmit={registerUser} method="post">
                        <div className="firstname">
                            <input value={userData.f_name} name='f_name' onChange={handleChange} type="text" placeholder='Firstname' />
                        </div>
                        <div className="lastname">
                            <input value={userData.l_name} name='l_name' onChange={handleChange} type="text" placeholder='Lastname' />
                        </div>
                        <div className="phone">
                            <input value={userData.phone} name='phone' onChange={handleChange} type="text" placeholder='Phone' />
                        </div>
                        <div className="password">
                            <input value={userData.password} name='password' onChange={handleChange} type="password" placeholder='Password' />
                        </div>
                        <div className="address">
                            <input value={userData.address} name='address' onChange={handleChange} type="text" placeholder='Address' />
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

export default Signup