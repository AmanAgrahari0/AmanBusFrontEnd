import React from 'react'
import './Testimonial.css'

import Slider from "react-slick";

function Testimonial() {

  
  const image = require('./user1.jpg')
  const customerData = [
    {
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      img: image
    },
    
    {
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      img: image
    },
    
    {
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      img: image
    },
  ]
  return (
    <div className='testimonial-section'>
        <div className="testimonial">
            <div className="title-test">
                <h2>Here’s what a few of our customers have to say about us</h2>
            </div>

            <div className="customer-review">
              {
                customerData.map((customer, index) => (
                  <div key={index} className="customer">
                    <div className="customer-img">
                        <img width={'100px'} src={customer.img} alt="customer" />
                    </div>
                    <div className="customer-name">
                        <h3>{customer.name}</h3>
                    </div>
                    <div className="customer-review">
                        <p>{customer.review}</p>
                    </div>
                  </div>
                ))
              }
            </div>
            
        </div>

    </div>
  )
}

export default Testimonial