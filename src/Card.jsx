import React from 'react'
import profilePic from "./assets/cappie.jpg"

function Card() {
  return (
    <div className='card'>
        <img className='card-image' src={profilePic} alt="Profile Picture"></img>
        <h2 className='card-title'>Calvin Then</h2>
        <p className='card-text'>I Try to Learn React JS</p>
    </div>
  )
}

export default Card
