import React from 'react';
import './Timer.scss';

import Ring from './Ring/Ring';

const timer = (props) => {
  return (
    <div className="circle">

      <Ring 
        radius={ props.radius }
        stroke={ props.stroke }
        progress={ props.progress }
        timerSession = { props.timerSession }
        sessionLen = {props.sessionLen}
        breakLen = {props.breakLen}
      />

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