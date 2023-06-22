import React, { useState } from 'react'
import './BusPass.css'
import axios from 'axios';
function BuyPass() {
    const [pass, setPass] = useState({
        passenger_email: "",
        passenger_phone: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPass({
            ...pass,
            [name]: value
        })
    }

    const buyPass = (e)=>{
        e.preventDefault();
        let url = 'http://localhost:3500/api/customer/purchase-pass';
        e.preventDefault();
        axios.post(url, pass)
        .then((res)=>{
            alert(res.data.message)
        }
        )
        .catch((err)=>{
            console.log(err)
        }
        )
        
    }

    
  return (
    <div className='buy-pass-section'>
        <div className="buy-pass">
            <div className="bus-form">
                <form method='post' onSubmit={buyPass}>
                    {/* <input value={pass.passenger_email} onChange={handleChange} type="text" placeholder='Enter Your Email' /><br />
                    <input value={pass.pasenger_phone} onChange={handleChange} type="text" placeholder='Enter Your Phone Number' /><br /> */}
                    <input placeholder='Enter Email' name='passenger_email' value={pass.passenger_email} onChange={handleChange} type="text" />
                    <input placeholder='Enter Password' name='passenger_phone' value={pass.passenger_phone} onChange={handleChange} type="text" />
                    <input type="submit" /><br />
                </form>
            </div>
        </div>
    </div>
  )
}

export default BuyPass