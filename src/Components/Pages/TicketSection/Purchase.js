import React, { useState } from 'react'
import './TicketSection.css'
import { useNavigate } from 'react-router-dom';

const passengerAuth = localStorage.getItem('passenger');
const passengerResult = JSON.parse(passengerAuth);

const customerAuth = localStorage.getItem('customer')
const customerResult = JSON.parse(customerAuth)

const busAuth = localStorage.getItem('busData')
const BusResult = JSON.parse(busAuth);

// console.log(BusResult)
// console.log(passengerResult)
// React Hook


function Purchase() {
  const navigate = useNavigate();
  const [PassengerName, setPassengerName] = useState(passengerResult.PassengerName);
  const [PassengerPhone, setPassengerPhone] = useState(passengerResult.PassengerPhone);
  const [price, setPrice] = useState(BusResult.price);
  const [dateOfJourney, setDateOfJourney] = useState(BusResult.dateOfJourney);
  const [time, setTime] = useState(BusResult.timeOfArrival)
  const [BusID, setBusID] = useState(BusResult.id);
  const [customerNumber, setCustomerNumber] = useState(customerResult.phone)


  const PassengerDetails = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3500/api/customer/add-passenger-details`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        PassengerName,
        PassengerPhone,
        price,
        dateOfJourney,
        time,
        BusID,
        customerNumber
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate('/bookings');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='ticket-section'>
      <div className="passenger-info">
        <form className='search-bus' onSubmit={PassengerDetails} >
          <input placeholder='Enter Name Of Passenger' type="text" value={passengerResult.PassengerName} onChange={(e) => setPassengerName(passengerResult.PassengerName)} /> <br />
          <input placeholder='Enter Phone Number ' type="text" value={passengerResult.PassengerPhone} onChange={(e) => setPassengerPhone(passengerResult.PassengerPhone)} /> <br />
          <input type="number" value={BusResult.price} onChange={(e) => setPrice(BusResult.price)} /> <br />
          <input type="text" value={BusResult.dateOfJourney} onChange={(e) => setDateOfJourney(BusResult.dateOfJourney)} /> <br />
          <input type="text" value={BusResult.timeOfArrival} onChange={(e) => setTime(BusResult.timeOfArrival)} /> <br />
          <input type="number" value={BusResult.id} onChange={(e) => setBusID(BusResult.id)} /> <br />
          <input type="text" value={customerResult.phone} onChange={(e) => setCustomerNumber(customerResult.phone)} /> <br />
          <input type="submit" /> <br />
        </form>
      </div>
    </div>
  )
}

export default Purchase