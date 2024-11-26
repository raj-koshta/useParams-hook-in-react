import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {name} = useParams();
  return (
    <h1 style={{  textAlign: 'center', fontSize: '50px', fontWeight: 'bold'}}>
        Welcome {name} to User Page
    </h1>
  )
}

export default User
