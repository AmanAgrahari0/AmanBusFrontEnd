import axios from 'axios';
import './TicketSection.css'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
const passengerAuth = localStorage.getItem('passenger');
const passengerResult = JSON.parse(passengerAuth);

const customerAuth = localStorage.getItem('customer')
const customerResult = JSON.parse(customerAuth)

const busAuth = localStorage.getItem('busData')
const BusResult = JSON.parse(busAuth);
const Booking = () => {
  const navigate = useNavigate();
  const payNow = async token => {
    try {
      const response = await axios.post({
        url: 'https://aman-bus.onrender.com/api/customer/payment',
        method: 'post',
        data: {
          amount: BusResult.price,
          token,
        }
      });
      if (response.status === 200) {
        console.log("Payment Successful")
        navigate('/ticket-history')
      }
    } catch (error) {
      console.log(error)
    }


  }
  return (
    <div className='booking-section'>
      <div className="booking-form">
        <div className="cont-booking">
          <div className="booking-info">
            <h2>Complete the Payment</h2>
          </div>
          <h3>Product: Bus Ticket</h3>
          <h3>Price: {BusResult.price}</h3>
        </div>
      </div>
      <StripeCheckout
        stripeKey="pk_live_51NJcubSIT3Y2fD3ys0nN3RTicD1SV64xdy2JPb2rCbZ4hXBlU08cuvsotwZlWox20TbfLaOwCnfDcN8hedE4BaZ800WoZQ6ge8"
        label="Pay Now"
        name="Bus Booking"
        currency='INR'
        billingAddress
        shippingAddress
        amount={BusResult.price * 100}
        description={`Your total is ₹ ${BusResult.price}`}
        token={payNow}
      />
    </div>

  )
};

export default Booking;