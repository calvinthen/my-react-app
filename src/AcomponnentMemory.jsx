import React from 'react'
import { DataSculptureList } from './utils/DataSculptureList';
import { useState } from 'react';

export default function AcomponnentMemory(){
    const [index, setIndex] = useState(0);

    function handleClick(){
        setIndex(index + 1);
    }

    let sculpture = DataSculptureList[index];
    return (
        <>
            <button onClick={handleClick}>
                Next
            </button>

            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {DataSculptureList.length})
            </h3>
            <img src={sculpture.url} alt={sculpture.alt} />

            <p>
                {sculpture.description}
            </p>
            
        </>
    )



}

