import React from 'react';
import './Settings.scss';

import Session from './Session/Session';
import Break from './Break/Break';
import Cycle from './Cycle/Cycle';

const settings = (props) => {

  let style;

  if (props.settingsClass === ""){
    style = {
      boxShadow: "-8px 0px 25px -10px rgba(0,0,0,1)"
    }
  }

  return (
    <div id="settings" style={style} className={props.settingsClass}>
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
      <button id="reset" className = "reset-btn"
        onClick={props.resetHandler}>Reset Default
      </button>
    </div>
  )
};

export default settings;