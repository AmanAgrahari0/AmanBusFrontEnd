import React from 'react'

function Admin() {
  return (
    <div className='admin-section'>
        <h2>Admin</h2>
        <a href="/admin-addbus">Add Bus</a> <br />
        <a href="/admin-viewbus">View Bus</a>
    </div>
  )
}

export default Admin