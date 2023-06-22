import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './Search.css'


function Search() {

    const navigate = useNavigate();
   

    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [dateOfJourney, setDateOfJourney] = useState("");
    const [journeyData, setJourneyData] = useState([]);

    const getSearchResult =async (e) => {
        e.preventDefault();
        const response = fetch(`http://localhost:3500/api/customer/getBusesByDate`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                origin, destination, dateOfJourney
            })
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res.result)
            setJourneyData(res.result)
        })
        .catch((res)=>{
            alert("No buses on this route on "+ res.result.dateOfJourney)
        })
        console.log(response)
    }

    useEffect((e)=>{
        getSearchResult()
    }, []);
    return (
        <div className='search-section'>
            <div className="search">
                <div className="search-input">
                    <form className='search-bus' onSubmit={getSearchResult} >
                        <div className="input departure">
                            <input required name='origin' value={origin} onChange={(e)=>setOrigin(e.target.value)} type="text" placeholder='Start' />
                        </div>
                        <div className="input arrival">
                            <input required name='destination' value={destination} onChange={(e)=>setDestination(e.target.value)} type="text" placeholder='destination' />
                        </div>
                        <div className="input dateOfJourney">
                            <input required name='dateOfJourney' value={dateOfJourney} onChange={(e)=>setDateOfJourney(e.target.value)} type="text" placeholder='dd-mm-yyyy' />
                        </div>
                        <div className="input search-btn">
                            <input required type="submit" />
                        </div>
                    </form>
                </div>
            </div>  
            {
                journeyData && journeyData.length > 0?
                journeyData.map((index, i) => {
                    console.log(index)
                    return (
                        <div className='bus-info'>
                            <div className="places" key={i}>
                                <div className="bus-origin" key={i}>{index.origin}</div>
                                <div className="bus-destination"key={i}>{index.destination}</div>
                            </div>
                            <div className="timings">
                                <div className="number-plate" key={i}>{index.number_plate}</div>
                                <div className="depature-time" key={i}>{index.dateOfJourney}</div>
                            </div>
                            <div className="pricing-time">
                                <div className="timeOfDeparture" key={i}>{index.timeOfDeparture}</div>
                                <div onClick={(e)=>{
                                   localStorage.setItem('busData',JSON.stringify(index))
                                   navigate('/ticket-counter')

                                }} className="price" key={i+6}>Pay: ₹{index.price}</div>
                            </div>
                        </div>
                    )
                }):<div><h2>Oops! No Buses Found</h2></div>
            }
        </div>
    )
}

export default Search