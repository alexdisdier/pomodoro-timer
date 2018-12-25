import React from 'react';
import './Timer.scss';

const timer = (props) => {
  return (
    <div className="circle">
          <div className="circle-content">
            <span id="timer-label" className="text">
              {props.timerSession ? 'session' : 'break'} is on
            </span>
            <span id="time-left" className="time">
              {props.displayTimer()}
            </span>
          </div>
    </div>
  )
};

export default timer;