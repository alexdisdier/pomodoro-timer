import React from 'react';
import './Cycle.scss';

const cycle = (props) => {

  return (
    <div>
      <div className="circle-cycle-container">
        {props.displayCycles()}
      </div>
      <div className="cycle-slogan">{props.timerSession ? 'Stay Focused' : 'Get a coffee'}</div>
    </div> 
  )
};

export default cycle;