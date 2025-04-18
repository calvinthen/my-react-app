import React, { useState } from 'react'

function Square() {
    const [value, setValue] = useState(null);
  
    function handleClick() {
      setValue('X');
    }
  
    return (
      <button
        className="square"
        onClick={handleClick}
      >
        {value}
      </button>
    );
  }

const Tictactoe = () => {
  return (
    <>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </>
  )
}

export default Tictactoe
