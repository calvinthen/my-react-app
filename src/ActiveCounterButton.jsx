import React from 'react'
import { useState } from 'react';

export default function ActiveCounterButton(){
    const [score, setScore] = useState(0);

    function increament (){
        setScore(a=> a + 1);
    }

    function increamentBy3 (){
        setScore(a=> a + 3);
    }


    return (
        <>
            <button onClick={() => increament()}> + 1 </button>
            <button onClick={() => increamentBy3()}> + 3 </button>
            <h1>
                Score : {score}
            </h1>
        </>
    )
}
