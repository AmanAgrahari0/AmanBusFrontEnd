import React from 'react'
import './Navigation.css'
function Navigation() {
  const auth = localStorage.getItem('customer');
  const result = JSON.parse(auth);
  return (
    <div className='navigation-section'>
      <div className="navigation">
        <div className="logo"><h2 style={{ fontFamily: 'fantasy', color: 'red' }}>AMAN BUS</h2></div>
        <div className="links">
          <div className="link"><a href="/#about">About</a></div>
          <div className="link get-pass">{auth ? <><a href="/buy-pass">Buy Pass</a></> : <><a href="/signup">Signup</a></>}</div>
          <div className="link">{auth ? <><a href="/profile">{result.f_name}</a></> : <><a href="/login">Login</a></>}</div>
          <div className="link">{auth ? <><a href="/ticket-history">View Tkt</a></> : <><a href="/login"></a></>}</div>
          <div className="link">Contact</div>

        </div>
      </div>



    </div>
  )
}

export default Navigation