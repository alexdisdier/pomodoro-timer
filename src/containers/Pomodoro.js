import React, { Component } from 'react';
import { ReactComponent as SettingsLogo } from './settings.svg';
import alarmTone from '../assets/mp3/alarm-tone/alarm-tone.mp3';
import coolAlarm from '../assets/mp3/cool-alarm/cool-alarm.mp3';
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
      
      timerSession: true,

      cycles: 3,
      cyclesLeft: null,

      timerStart: false,
      cyclesStarted: false,
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
    this.displayCycles = this.displayCycles.bind(this);
    this.alarmSoundHandler = this.alarmSoundHandler.bind(this);
  }

  incBreakHandler = () => {
    // console.log('clicked on incBreakHandler');
    const breakLen = this.state.breakLen;
    if (!this.state.timerStart){
      if (breakLen < 60 ){
        this.setState({ breakLen: breakLen + 1 })
      };
      if (this.state.timerSession && breakLen < 60){
        this.setState({ 
          breakLen: breakLen + 1,
          minutesLeft: null,
          secondsLeft: null
         })
      }
    }
  }

  decBreakHandler = () => {
    // console.log('clicked on decBreakHandler');
    const breakLen = this.state.breakLen;
    if (!this.state.timerStart){
      if (breakLen > 1){
        this.setState({ breakLen: breakLen - 1 })
      };
      if (this.state.timerSession && breakLen > 1){
        this.setState({ 
          breakLen: breakLen - 1,
          minutesLeft: null,
          secondsLeft: null
         })
      }
    }
  }

  incSessionHandler = () => {
    // console.log('clicked on incSessionHandler');
    const sessionLen = this.state.sessionLen;
    if (!this.state.timerStart){
      if (sessionLen < 60 ){
        this.setState({ sessionLen: sessionLen + 1 })
      };
      if (this.state.timerSession && sessionLen < 60 ){
        this.setState({ 
          sessionLen: sessionLen + 1,
          minutesLeft: null,
          secondsLeft: null
         })
      }
    }
  }

  decSessionHandler = () => {
    // console.log('clicked on decSessionHandler');
    const sessionLen = this.state.sessionLen;
    if (!this.state.timerStart){
      if (sessionLen > 1){
        this.setState({ sessionLen: sessionLen - 1 })
      };
      if (this.state.timerSession && sessionLen > 1){
        this.setState({ 
          sessionLen: sessionLen - 1,
          minutesLeft: null,
          secondsLeft: null
         })
      }
    }
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
    if (cycles > 1){
      this.setState({ cycles: cycles - 1 })
    };
  }

  resetHandler = () => {
    this.stop();
    // console.log('clicked on resetHandler');
    this.setState({
      breakLen: 5,
      sessionLen: 25,

      minutesLeft: null,
      secondsLeft: null,

      intervalId: null, // for clearInterval

      // timerTxt: '', // timer text (work or take a break)

      cycles: 3,
      cyclesLeft: null,
      cyclesStarted: false,
      
      timerStart: false
      // timerSession: true
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
      timerStart: !timerStart,
      cyclesStarted: true
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
    // console.log('ticking');
    const minutesLeft = this.state.minutesLeft; //25
    const secondsLeft = this.state.secondsLeft; //59
    const timerSession = this.state.timerSession; // Default set to true
    const cyclesLeft = this.state.cyclesLeft;
    // if timer set to session when 00:00, then set timer to break and vice versa. Every time break ends
    if (this.state.cyclesLeft === 0) {
      this.setState({
        timerStart: false
      })
      return this.resetHandler();
    }
    else if (this.state.minutesLeft === 0 && this.state.secondsLeft === 0 && this.state.cyclesLeft > 0 && this.state.timerSession){ // checks if timer was set on session
      // console.log('We are on break');
      let audio = document.getElementById('beep');
      
      this.setState({
        minutesLeft: this.state.breakLen,
        secondsLeft: 0,

        timerSession: !timerSession // if true, returns false meaning break
      })
      audio.play();
    } 

    else if (this.state.minutesLeft === 0 && this.state.secondsLeft === 0 && this.state.cyclesLeft > 0 && !this.state.timerSession) { // checks if the timer was set on break
      // console.log('we are back on a session with one less cycle');
      let audio = document.getElementById('beep');
      
      this.setState({
        minutesLeft: this.state.sessionLen,
        secondsLeft: 0,
        // cycles: this.state.cycles - 1,
        cyclesLeft: cyclesLeft - 1,

        timerSession: !timerSession // if true, returns false meaning break
      })
      audio.play();
    }
    
    else {
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
  }

  start = () => {
    if (this.state.sessionLen !== null && this.state.minutesLeft === null && this.state.secondsLeft === null) {
      this.setState({
        intervalId: setInterval(this.tick,1000),
        // timerSeconds: this.state.sessionLen * 60,
        minutesLeft: this.state.sessionLen-1,
        secondsLeft: 59,
        cyclesLeft: this.state.cycles
      })
      
    } else {
      this.setState({
        intervalId: setInterval(this.tick,1000)
      })
    }
  }

  stop = () => {
    clearInterval(this.state.intervalId);
    // let audio = document.getElementById('beep');
    // audio.pause(); 
    // audio.currentTime = 0;
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

  displayCycles = () => { // this functions is called too many times 
    const circlesArr = [];
    // let cycles = this.state.cycles - this.state.cyclesLeft;
    // console.log(cycles);

    for (let i = 0; i < this.state.cycles; i++) {
      circlesArr.push(<div key={i}className="circle-cycle"></div>);   
    }
    // console.log(circlesArr);
    return circlesArr;
  }

  alarmSoundHandler = () => {
 
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

    let pomodoroBg = {
      background: "linear-gradient(165.18deg, #D66770 0%, rgba(254, 111, 69, 0.86) 92.3%)"
    }

    if (!this.state.timerSession){
      pomodoroBg.background = "linear-gradient(163.95deg, #94CCCB 1.06%, #E1E19D 92.27%)"
    }

    return (
      <div className="App">
        <div className="Pomodoro-container" style={pomodoroBg}>

        <button id="toggle-settings" onClick={this.toggleSettingsHandler}>
        {!this.state.showSettings ? (
        <SettingsLogo className="settings-icon" alt="settings icon"/>
      ) : (
        'x'
      )}  
        </button>
          <Timer
            timerSession = {this.state.timerSession}
            breakLen = {this.state.breakLen}
            sessionLen = {this.state.sessionLen}
            minutesLeft = {this.state.minutesLeft}
            secondsLeft = {this.state.secondsLeft}
            displayTimer = {this.displayTimer}
          />
          <Cycle
            timerType = {this.state.timerType}
            timerSession = {this.state.timerSession}
            cycles = {this.state.cycles}
            cyclesStarted = {this.state.cyclesStarted}
            cyclesLeft = {this.state.cyclesLeft}
            displayCycles = {this.displayCycles}
          />
          {settings}
          <Start 
            timerStartClicked = {this.timerStartHandler}
            timerStart = {this.state.timerStart}
          />
        </div>
        <audio id="beep" src={this.state.timerSession ? coolAlarm : alarmTone}>
        </audio>
      </div>
    );
  }
}

export default Pomodoro;
