import React from 'react'

function Item ({name, isPacked}){
    if (isPacked) {
        return <li className="item">{name} ✅</li>;
      }
      return <li className="item">{name}</li>;
}

const PackingList = () => {
  return (
    <section>
        <h1>Sally ride packing list</h1>
        <ul>
            <Item 
                isPacked={true}
                name="Space Suit"
            />
            <Item 
                isPacked={true} 
                name="Helmet with a golden leaf" 
            />
            <Item 
                isPacked={false} 
                name="Photo of Tam" 
            />
        </ul>
    </section>
  )
}

export default PackingList
