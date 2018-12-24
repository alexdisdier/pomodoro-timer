import React, { Component } from 'react';
import { ReactComponent as SettingsLogo } from './settings.svg';
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
      minutesLeft: null,
      secondsLeft: null,
      intervalId: null,
      timerType: 'session',
      timerSeconds: '', // time left
      timerTxt: '', // timer text (work or take a break)

      cycles: 3,

      timerStart: false,
      showSettings: false,
      
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
    this.tick = this.tick.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.displayTimer = this.displayTimer.bind(this);
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
    if (breakLen > 1){
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
    if (sessionLen > 1){
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
      minutesLeft: null,
      secondsLeft: null,
      intervalId: null,
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
    const timerStart = this.state.timerStart;

    this.setState({ 
      timerStart: !timerStart
    });

    if (!timerStart){
      console.log('timer started');
      this.start();
    } else {
      console.log('timer paused');
      this.stop();
    }
  };

  tick = () => {
    console.log('ticking');
    const minutesLeft = this.state.minutesLeft; //25
    const secondsLeft = this.state.secondsLeft; //59
    
    if (this.state.secondsLeft > 0){
      this.setState({ 
        secondsLeft: secondsLeft - 1
      });
    } 
    else if (this.state.secondsLeft === 0){
      this.setState({ 
        minutesLeft: minutesLeft - 1,
        secondsLeft: 59
      });
    }     
  }

  start = () => {
    if (this.state.sessionLen !== null &&         this.state.minutesLeft === null && this.state.secondsLeft === null) {
      this.setState({
        intervalId: setInterval(this.tick,1000),
        timerSeconds: this.state.sessionLen * 60,
        minutesLeft: this.state.sessionLen-1,
        secondsLeft: 59
      })
      // const timerSeconds = this.state.timerSeconds
    } else {
      this.setState({
        intervalId: setInterval(this.tick,1000)
      })
    }
  }

  stop = () => {
    clearInterval(this.state.intervalId);
  };

  displayTimer = () => {
    let minutesLeft;
    let secondsLeft;
    if (this.state.minutesLeft !== null) {
        minutesLeft = parseInt(this.state.minutesLeft);
        secondsLeft = parseInt(this.state.secondsLeft);
      if (this.state.minutesLeft < 10){
        minutesLeft = '0'+ parseInt(this.state.minutesLeft);
      }
      if (this.state.secondsLeft < 10){
        secondsLeft = '0' + parseInt(this.state.secondsLeft);
      }
    } else {
      if (this.state.sessionLen < 10){
        minutesLeft = '0' + parseInt(this.state.sessionLen);
        secondsLeft = '00';
      } else {
        minutesLeft = parseInt(this.state.sessionLen);
        secondsLeft = '00';
      }
    }
   
    return minutesLeft + ':' + secondsLeft;
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
            minutesLeft = {this.state.minutesLeft}
            secondsLeft = {this.state.secondsLeft}
            displayTimer = {this.displayTimer}
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
