import React from 'react';
import './Timer.scss';

const timer = (props) => {
  return (
    <div className="circle">
          <div className="circle-content">
            <span className="text">
              {props.timerType} is on
            </span>
            <span className="time">
              {props.displayTimer()}
            </span>
          </div>
    </div>
  )
};

export default timer;