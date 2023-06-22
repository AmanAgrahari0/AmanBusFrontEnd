import React, { useState } from 'react'
import './Profile.css'
function Profile() {
    const auth = localStorage.getItem('customer');
    const result = JSON.parse(auth);
  return (
    <div className='profile-section'>
        <div className="profile">
            <div className="profile-main">
                <div className="profile-name">
                   Name:  {result.f_name+" "+result.l_name} 
                </div> <hr />
                <div className="phone">
                    Phone: {result.phone}
                </div> <hr />
                <div className="address">
                    Address: {result.address}
                </div> <hr />
                <div className="check-passes">
                    <div>
                        <a href="/view-pass">Bus Passes</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile