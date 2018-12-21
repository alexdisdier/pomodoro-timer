import React, { Component } from 'react';
import './Pomodoro.scss';

import Timer from '../components/Timer/Timer';
import Cycle from '../components/Cycle/Cycle';
import Settings from '../components/Settings/Settings';

class Pomodoro extends Component {
  constructor(props){
    super(props);

    this.state = {
      breakLen: '5',
      sessionLen: '25',
      timerType: 'session',
      timerNum: '', // time left
      timerTxt: '', // timer text (work or take a break)
      cycles: '0',
      playPause: false,
      showSettings: false
    }

    this.incBreakHandler = this.incBreakHandler.bind(this);
    this.decBreakHandler = this.decBreakHandler.bind(this);
    this.incSessionHandler = this.incSessionHandler.bind(this);
    this.decSessionHandler = this.decSessionHandler.bind(this);
    this.incCycleHandler = this.incCycleHandler.bind(this);
    this.decCycleHandler = this.decCycleHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.toggleSettingsHandler = this.toggleSettingsHandler.bind(this);
  }

  incBreakHandler = () => {
    console.log('clicked on incBreakHandler');
  }

  decBreakHandler = () => {
    console.log('clicked on decBreakHandler');
  }

  incSessionHandler = () => {
    console.log('clicked on incSessionHandler');
  }

  decSessionHandler = () => {
    console.log('clicked on decSessionHandler');
  }

  incCycleHandler = () => {
    console.log('clicked on incCycleHandler');
  }

  decCycleHandler = () => {
    console.log('clicked on decCycleHandler');
  }

  resetHandler = () => {
    console.log('clicked on resetHandler');
  }

  toggleSettingsHandler = () => {
    const doesShow = this.state.showSettings;
    this.setState({ showSettings: !doesShow });
  }

  render() {
    return (
      <div className="Pomodoro-container">
        <Timer
          timerType = {this.state.timerType}
          breakLen = {this.state.breakLen}
          sessionLen = {this.state.sessionLen}
        />
        <Cycle 
          timerType = {this.state.timerType}
          cycle = {this.state.cycle}
        />
        <Settings 
        />
      </div>
    );
  }
}

export default Pomodoro;
