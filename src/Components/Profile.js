import React, { useEffect, useState } from 'react'

function Profile() {

  const [userData, setUserData] = useState([]);

  const getData = (props)=>{
    const response = fetch(`http://localhost:3500/api/customer/profile/1231231231`)
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res)
      setUserData(res)
    })
  };

  useEffect(()=>{
    getData()
  },[])
  return (
    <>
      {
        userData.map((index, i)=>{
          return(
            <>
            {index.f_name} <br />
            {index.l_name} <br />
            {index.address}

            <div>
              <a href="http://localhost:3500/api/customer/logout">Logout</a>
            </div>
            </>
          )
        })
      }
    </>
  )
}

export default Profile