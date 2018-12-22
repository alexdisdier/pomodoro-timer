import React from 'react';

const session = (props) => {
  return (
    <div>
      <span id="session-label">
        Stay focused
      </span>
      <div className="settings-manip">
        <button id="session-increment" 
          onClick={props.incSessionHandler}>
          +
        </button>
        <span id="session-length">{props.sessionLen}</span>
        <button id="session-decrement" 
          onClick={props.decSessionHandler}>
          -
        </button>
        </div>
      
    </div>
  );
}

export default session;