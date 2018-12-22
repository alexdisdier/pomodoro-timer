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
              25:00
            </span>
          </div>
    </div>
  )
};

export default timer;