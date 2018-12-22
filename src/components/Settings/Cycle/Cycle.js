import React from 'react';

const cycle = (props) => {
  return (
    <div>
      <span id="cycles-label">
        Cycles
      </span>
      <div className="settings-manip">
        <button id="cycles-increment" 
          onClick={props.incCycleHandler}>
          +
        </button>
        <span id="cycles-length">{props.cycles}</span>
        <button id="cycles-decrement" 
          onClick={props.decCycleHandler}>
          -
        </button>
        </div>
      
    </div>
  );
}

export default cycle;