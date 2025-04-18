import React from 'react'

const RespondingToEvents = () => {

    function handleClick()
    {
        alert('You Clicked me !');
    }
  return (
    <button onClick={handleClick}>
        Click Me 
    </button>
  )
}

export default RespondingToEvents
