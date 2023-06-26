import React, { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import axios from 'axios'
import './TicketSection.css'

const customerAuth = localStorage.getItem('customer')
const customerResult = JSON.parse(customerAuth)


function TicketHistory() {
    const [ticketData, setTicketData] = useState([])
    const getTicketDetails = (e) => {
        // e.preventDefault();
        axios.get(`https://aman-bus.onrender.com/api/tickets/${customerResult.phone}`)
            .then((res) => {
                console.log(res.data.result)
                setTicketData(res.data.result)
            })
            .catch((err) => {
                console.log(err)
            })
    };

    useEffect(() => {
        getTicketDetails();
    }, [])

    return (
        <div className='ticket-history-section'>
            <div className="ticket-history">
                <div className="passenger-name">
                    <div className="name">Name: {ticketData.PassengerName} </div>
                </div>
                <div className="passenger-phone">
                    <div className="phone">Phone: {ticketData.PassengerPhone}</div>
                </div>
                <div className="date-and-time">
                    <div className="date">Date: {ticketData.dateOfJourney}</div>
                    <div className="time">Time: {ticketData.time}</div>
                </div>
                <div className="qr-code">
                    <QRCode
                        value={ticketData.PassengerName + "\n" + ticketData.PassengerPhone + "\n" + ticketData.time}
                        size={100}
                    />
                </div>
            </div>

        </div>
    )
}

export default TicketHistory