import React, { useState } from 'react';
import axios from 'axios';
import './Admin.css'

const AddBus = () => {
  const [busData, setBusData] = useState({
    id: '',
    number_plate: '',
    origin: '',
    destination: '',
    dateOfArrival: '',
    dateOfJourney: '',
    timeOfDeparture: '',
    timeOfArrival: '',
    price: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBusData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://aman-6rnm.onrender.com/api/busRoute/postBuses', busData)
      .then((response) => {
        console.log(response.data);
        // Do something with the response if needed
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        // Handle the error if needed
      });
  };

  return (
    <div className='addbus'>

      <h2>Add Bus</h2>
      <div className="add-bus-form">
      <form onSubmit={handleSubmit}>
        <label>
          ID: <br/>
          <input
            type="text"
            name="id"
            value={busData.id}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Number Plate:  <br/>
          <input
            type="text"
            name="number_plate"
            value={busData.number_plate}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Origin: <br/>
          <input
            type="text"
            name="origin"
            value={busData.origin}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Destination: <br/>
          <input
            type="text"
            name="destination"
            value={busData.destination}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Date of Arrival: <br/>
          <input
            type="text"
            name="dateOfArrival"
            value={busData.dateOfArrival}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Date of Journey: <br/>
          <input
            type="text"
            name="dateOfJourney"
            value={busData.dateOfJourney}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Time of Departure: <br/>
          <input
            type="text"
            name="timeOfDeparture"
            value={busData.timeOfDeparture}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Time of Arrival: <br/>
          <input
            type="text"
            name="timeOfArrival"
            value={busData.timeOfArrival}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Price: <br/>
          <input
            type="text"
            name="price"
            value={busData.price}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add Bus</button>
      </form>
      </div>
      
    </div>
  );
};

export default AddBus;