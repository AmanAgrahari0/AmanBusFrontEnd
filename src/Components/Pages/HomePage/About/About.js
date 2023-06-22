import React from 'react'
import './About.css'
function About() {
  const img1 = require('./1.svg');
  const img2 = require('./2.svg');
  const img3 = require('./2.svg');
  return (
    <div className='about-section'>
      <div className="about">
        <div className="about-elem">
          <div className="about-img">
          <img src='https://img.icons8.com/service' alt="" />
          </div>
          <div className="elem-heading"><h3>Best In Class Service</h3></div>

        </div>
        <div className="about-elem">
          <div className="about-img">
            <img src='https://img.icons8.com/bus' alt="" />
          </div>
          <div className="elem-heading"><h3>Best In Price</h3></div>
        </div>
        <div className="about-elem">
          <div className="about-img">
          <img src='https://img.icons8.com/money' alt="" />
          </div>
          <div className="elem-heading"><h3>Great Offers</h3></div>
        </div>
      </div>
    </div>
  )
}

export default About