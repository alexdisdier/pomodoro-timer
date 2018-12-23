import React from 'react';
import './Break.scss';

const Break = (props) => {
  return (
    <div className = "settings-children break">
      <span id="break-label">
        Take a break
      </span>
      <div className="settings-manip">
        <button id="break-increment" 
          onClick={props.incBreakHandler}>
          +
        </button>
        <span id="break-length">{props.breakLen}</span>
        <button id="break-decrement" 
          onClick={props.decBreakHandler}>
          -
        </button>
      </div>

    </div>
  );
}

export default Break;