import React, { useState, useEffect } from 'react'

import './BusInfo.css'
import About from './HomePage/About';

function BusInfo() {
  // Passenger Modal Set
  const [passengerForm, setPassengerForm] = useState("");
  const [modal, setModal] = useState([]);

  const addPassenger = async (passenger) => {
    setModal([passenger]);
  }

  const [busData, setBusData] = useState([]);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [dateofTravel, setDateofTravel] = useState("")

  // Add Passenger Details
  const BusData = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3500/api/customer/getBusesByDate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        origin, destination
      })
    })
      .then((res) => res.json())
      .then((res) => setBusData(res))
    setOrigin("");
    setDestination("");

  };
  useEffect(() => {
    BusData()
  }, []);


  const [PassengerName, setPassengerName] = useState("");
  const [PassengerPhone, setPassengerPhone] = useState("");
  const [id, setId] = useState(0);
  const [price, setPrice] = useState(0)
  const [dateOfJourney, setDateOfJourney] = useState("")
  const [time, setTime] = useState("");
  const [BusID, setBusID] = useState(0);
  const [passengerDetails, setPassengerDetails] = useState([]);

  const passengerFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3500/api/customer/add-passenger-details`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id, PassengerName, PassengerPhone, price, dateOfJourney, time, BusID
      })
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .then((res) => setPassengerDetails(res))
      .then(()=>window.location.reload())
    // setPassengerName("")
    // setPassengerPhone("")
  }
  useEffect(()=>{
    passengerFormSubmit()
  },[])



  return (
    <>
      <div className='search-buses'>
        <form className='form' onSubmit={BusData}>
          <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} name='origin' placeholder='FROM' />
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value.toString())} name='destination' placeholder='TO' /> <br />
          {/* <input type="date" name="dateOfJourney" value={dateofTravel}  onChange={(e)=>setDateofTravel(e.target.value)} id="" /> */}

          <button type="submit">Search</button>

        </form>

        <div className='bus-info'>
          {
            busData.map((index, i) => {
              return (
                <div className='card'>
                  <div className="card-left">
                    <div className="from">Origin: {index.origin}</div>
                    <div className="to">Destination: {index.destination}</div>

                  </div>
                  <div className="card-right">
                    <div className="date-of-journey">{index.dateOfJourney}</div>
                    <div className="time-of-journey">{index.timeOfDeparture}</div>
                    <button onClick={() => {
                      setPassengerForm(!passengerForm)
                      addPassenger(index)
                    }} style={{ backgroundColor: 'yellow' }}>Pay {index.price}</button>
                  </div>
                </div>

              )
            })

          }
          {
            passengerForm ?
              <>
                <div className='passenger-form' >
                  <div>
                    <form onSubmit={passengerFormSubmit} method="post">
                      <input type="text" name='PassengerName' placeholder='Name' value={PassengerName} onChange={(e) => setPassengerName(e.target.value)} /> <br />
                      <input type="text" name='PassengerPhone' placeholder='Phone' value={PassengerPhone} onChange={(e) => setPassengerPhone(e.target.value)} /> <br />
                      
                      {
                        modal.map((index) => {
                          return (
                            <>
                                <input type="text" name='price' value={index.price} onChange={(e)=>setPrice(index.price)} /> <br />
                                <input type="text" name='dateOfJourney' value={index.dateOfJourney} onChange={(e)=>setDateOfJourney(index.dateOfJourney)} /> <br />
                                <input type="text" name='time' value={index.timeOfDeparture} onChange={(e)=>setTime(index.timeOfDeparture)} /> <br />
                                <input type="text" name='BusID' value={index.id} onChange={(e)=>setId(e.target.value)} /> <br />
                                <button type="submit">Checkout</button>
                            </>
                          )
                        })
                      }
                    </form>
                  </div>
                </div>
              </> :
              <>
              </>
          }
        </div>
      </div>
      <About />
    </>
  )
}

export default BusInfo