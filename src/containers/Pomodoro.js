import React, { Component } from 'react';
import logo, { ReactComponent as SettingsLogo } from './settings.svg';
import './Pomodoro.scss';

import Timer from '../components/Timer/Timer';
import Cycle from '../components/Cycle/Cycle';
import Settings from '../components/Settings/Settings';
import Start from '../components/Start/Start';

class Pomodoro extends Component {
  constructor(props){
    super(props);

    this.state = {
      breakLen: 5,
      sessionLen: 25,
      timerType: 'session',
      timerNum: '', // time left
      timerTxt: '', // timer text (work or take a break)
      cycles: 3,
      timerStart: false,
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
    this.timerStartHandler = this.timerStartHandler.bind(this);
  }

  incBreakHandler = () => {
    // console.log('clicked on incBreakHandler');
    const breakLen = this.state.breakLen;
    if (breakLen < 60 ){
      this.setState({ breakLen: breakLen + 1 })
    };
  }

  decBreakHandler = () => {
    // console.log('clicked on decBreakHandler');
    const breakLen = this.state.breakLen;
    if (breakLen > 0){
      this.setState({ breakLen: breakLen - 1 })
    };
  }

  incSessionHandler = () => {
    // console.log('clicked on incSessionHandler');
    const sessionLen = this.state.sessionLen;
    if (sessionLen < 60 ){
      this.setState({ sessionLen: sessionLen + 1 })
    };
  }

  decSessionHandler = () => {
    // console.log('clicked on decSessionHandler');
    const sessionLen = this.state.sessionLen;
    if (sessionLen > 0){
      this.setState({ sessionLen: sessionLen - 1 })
    };
  }

  incCycleHandler = () => {
    // console.log('clicked on incCycleHandler');
    const cycles = this.state.cycles;
    if (cycles < 5 ){
      this.setState({ cycles: cycles + 1 })
    };
  }

  decCycleHandler = () => {
    // console.log('clicked on decCycleHandler');
    const cycles = this.state.cycles;
    if (cycles > 0){
      this.setState({ cycles: cycles - 1 })
    };
  }

  resetHandler = () => {
    // console.log('clicked on resetHandler');
    this.setState({
      breakLen: 5,
      sessionLen: 25,
      timerType: 'session',
      timerNum: '', // time left
      timerTxt: '', // timer text (work or take a break)
      cycles: 3,
      timerStart: false
    })
  }

  toggleSettingsHandler = () => {
    // console.log('toggle settings');
    const doesShow = this.state.showSettings;
    this.setState({ showSettings: !doesShow });
  }

  timerStartHandler = () => {
    console.log('play pause btn');
    const timerStart = this.state.timerStart;
    this.setState({ timerStart: !timerStart });
  }

  render() {
    let settings = null;

    if (this.state.showSettings) {
      settings = <Settings 
        toggleSettingsHandler = {this.toggleSettingsHandler}
        breakLen = {this.state.breakLen}
        incBreakHandler = {this.incBreakHandler}
        decBreakHandler = {this.decBreakHandler}
    
        sessionLen = {this.state.sessionLen}
        incSessionHandler = {this.incSessionHandler}
        decSessionHandler = {this.decSessionHandler}

        cycles = {this.state.cycles}
        incCycleHandler = {this.incCycleHandler}
        decCycleHandler = {this.decCycleHandler}

        resetHandler = {this.resetHandler}
      />
    };

    return (
      <div className="App">
        <div className="Pomodoro-container">

        <button id="toggle-settings" onClick={this.toggleSettingsHandler}>
        {!this.state.showSettings ? (
        <SettingsLogo className="settings-icon" alt="settings icon"/>
      ) : (
        'x'
      )}
          
        </button>

          <Timer
            timerType = {this.state.timerType}
            breakLen = {this.state.breakLen}
            sessionLen = {this.state.sessionLen}
          />
          <Cycle 
            timerType = {this.state.timerType}
            cycles = {this.state.cycles}
          />
          {settings}
          <Start 
            timerStartClicked = {this.timerStartHandler}
            timerStart = {this.state.timerStart}
          />
        </div>
      </div>
    );
  }
}

export default Pomodoro;
