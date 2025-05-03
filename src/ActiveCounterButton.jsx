import React from 'react'
import { useState } from 'react';

function Button({ onClick, children }) {
    return (
      <button onClick={e => {
        e.stopPropagation();
        onClick();
      }}>
        {children}
      </button>
    );
  }

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
            {/* <div className='Toolbar' onClick={() => alert('Hello')}> */}
                <button onClick={increament}> + 1 </button>
                <button onClick={increamentBy3}> + 3 </button>
                <h1>
                    Score : {score}
                </h1>
            {/* </div> */}
        </>
    )
}
