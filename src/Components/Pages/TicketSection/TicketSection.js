import React, { useState } from 'react'
import './TicketSection.css'
import { useNavigate } from 'react-router-dom';

function TicketSection() {

    const navigate = useNavigate();
    // PAssenger Details
    const [PassengerName, setPassengerName] = useState("");
    const [PassengerPhone, setPassengerPhone] = useState("")
    // const [PassengerData, setPassengerData] = useState([])
    const passengerDetails = (e)=>{
        localStorage.setItem('passenger', JSON.stringify({PassengerName, PassengerPhone}));
        navigate('/purchase-ticket')
    }

    return (
        <div className='ticket-section'>
            <div className="passenger-info">
                <form className='search-bus' onSubmit={passengerDetails} >
                    <input placeholder='Enter Name Of Passenger' type="text" value={PassengerName} onChange={(e)=>setPassengerName(e.target.value)} /> <br />
                    <input placeholder='Enter Phone Number ' type="text" value={PassengerPhone} onChange={(e)=>setPassengerPhone(e.target.value)} /> <br />
                    <input type="submit" /> <br />
                </form>
            </div>
            <br />
        </div>
    )
}

export default TicketSection