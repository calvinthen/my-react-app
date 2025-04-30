import React from 'react'
import { useState } from 'react';
import { DataSculptureList } from './utils/DataSculptureList.js';

function SculptureList (){
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < DataSculptureList.length - 1;

    function handleNextClick() {
        if (hasNext) {
          setIndex(index + 1);
        } else {
          setIndex(0);
        }
      }

      function handleMoreClick() {
        setShowMore(!showMore);
      }
    
      let sculpture = DataSculptureList[index];
      return (
        <>
            <button onClick={handleNextClick}>
                Next
            </button>
            <h2>
               <i>{sculpture.name}</i> 
               by {sculpture.artist}
            </h2>

            <h3>
                ({index + 1 } of {DataSculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            <br></br>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
      );
}

export default SculptureList
