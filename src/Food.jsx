import React from 'react'



const Food = () => {
  const foodItem = ["Apple","Banana", "Grape"];

  return (
    
    <div>
      <ul>
        {foodItem.map((food) => (
          <li>{food}</li>
        ))}
      </ul>
    </div>
  )
}

export default Food
