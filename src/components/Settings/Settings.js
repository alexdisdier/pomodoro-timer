import React from 'react';
import './Settings.scss';

import Session from './Session/Session';
import Break from './Break/Break';
import Cycle from './Cycle/Cycle';

const settings = (props) => {

  return (
    <div id="settings">
      <Session
        sessionLen = {props.sessionLen}
        incSessionHandler = {props.incSessionHandler}
        decSessionHandler = {props.decSessionHandler}
      />
      <Break 
        breakLen = {props.breakLen}
        incBreakHandler = {props.incBreakHandler}
        decBreakHandler = {props.decBreakHandler}
      />
      <Cycle
        cycles = {props.cycles}
        incCycleHandler = {props.incCycleHandler}
        decCycleHandler = {props.decCycleHandler}
      />
      <button className = "reset-btn"
        onClick={props.resetHandler}>Reset Default
      </button>
    </div>
  )
};

export default settings;