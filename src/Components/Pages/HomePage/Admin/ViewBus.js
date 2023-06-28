import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewBus = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    fetchBuses();
  }, []);

  const fetchBuses = () => {
    axios
      .get('https://aman-6rnm.onrender.com/api/busRoute/getAllBuses')
      .then((response) => {
        setBuses(response.data);
      })
      .catch((error) => {
        console.error(error);
        // Handle the error if needed
      });
  };

  return (
    <div>
      <h2>View Buses</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Number Plate</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Date of Arrival</th>
            <th>Date of Journey</th>
            <th>Time of Departure</th>
            <th>Time of Arrival</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {buses.map((bus) => (
            <tr key={bus.id}>
              <td>{bus.id}</td>
              <td>{bus.number_plate}</td>
              <td>{bus.origin}</td>
              <td>{bus.destination}</td>
              <td>{bus.dateOfArrival}</td>
              <td>{bus.dateOfJourney}</td>
              <td>{bus.timeOfDeparture}</td>
              <td>{bus.timeOfArrival}</td>
              <td>{bus.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBus;