import React from 'react'

export function Clock({time})
{   
    let hours = time.getHours();
    let className;
    console.log(hours);

    
    // eslint-disable-next-line no-constant-condition, no-constant-binary-expression
    if(hours => 0 && hours <= 6)
      {
        className = 'night';
      }
    else {
        className = 'day';
    }

    return (
      <h1 className={className}>
        {time.toLocaleTimeString()}
      </h1>

    );

    
}

const ClockProblemDayAndNight = () => {
 

  return (
    <Clock time={new Date()}/>
  );
}

export default ClockProblemDayAndNight
