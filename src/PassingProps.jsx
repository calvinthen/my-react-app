import React from 'react'
import { getImageUrl } from './utils/getImageUrl'; 

function PassingProps({ person, size }) {
    return (
      <img
        className='avatar'
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }

export default PassingProps
