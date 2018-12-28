import React, { Component } from 'react';
import { ReactComponent as SettingsLogo } from './settings.svg';
// import alarmTone from '../assets/mp3/alarm-tone/alarm-tone.mp3';
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
      intervalId: null,
      
      timerSession: true,
      timer: 1500, 

      cycles: 3,
      cyclesLeft: null,

      timerStart: false,
      cyclesStarted: false,
      // showSettings: false,

      settingsClass: "slide-settings"
      
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
        this.setState({ 
          breakLen: breakLen + 1,
          // timer: this.state.timer + 60,
        })
      };
      if (this.state.timerSession && breakLen < 60){
        this.setState({ 
          breakLen: breakLen + 1,
          // timer: this.state.timer + 60,
         })
      }
    }
  }

  decBreakHandler = () => {
    // console.log('clicked on decBreakHandler');
    const breakLen = this.state.breakLen;
    if (!this.state.timerStart){
      if (breakLen > 1){
        this.setState({ 
          breakLen: breakLen - 1, 
          // timer: this.state.timer - 60
        })
      };
      if (this.state.timerSession && breakLen > 1){
        this.setState({ 
          breakLen: breakLen - 1,
          // timer: this.state.timer - 60,
         })
      }
    }
  }

  incSessionHandler = () => {
    // console.log('clicked on incSessionHandler');
    const sessionLen = this.state.sessionLen;
    if (!this.state.timerStart){
      if (sessionLen < 60 ){
        this.setState({ 
          sessionLen: sessionLen + 1,
          timer: this.state.timer + 60
        })
      };
      if (this.state.timerSession && sessionLen < 60 ){
        this.setState({ 
          sessionLen: sessionLen + 1,
          timer: (sessionLen + 1) * 60,
         })
      }
    }
  }

  decSessionHandler = () => {
    // console.log('clicked on decSessionHandler');
    const sessionLen = this.state.sessionLen;
    if (!this.state.timerStart){
      if (sessionLen > 1){
        this.setState({ 
          sessionLen: sessionLen - 1,
          timer: this.state.timer - 60,
        })
      };
      if (this.state.timerSession && sessionLen > 1){
        this.setState({ 
          sessionLen: sessionLen - 1,
          timer: (sessionLen - 1) * 60,
         })
      }
    }
  }

  incCycleHandler = () => {
    const cycles = this.state.cycles;
    if (!this.state.timerStart){
      if (cycles < 5 ){
        this.setState({ 
          cycles: cycles + 1,
          // timer: this.state.timer + cycleTime
        })
      };
      if (this.state.timerSession && this.state.cyclesStarted && cycles < 5 ){
        this.setState({ 
          cycles: cycles + 1,
          cyclesLeft: this.state.cyclesLeft + 1,
          // timer: this.state.timer + cycleTime
         })
      }
    }
    
  }

  decCycleHandler = () => {
    const cycles = this.state.cycles;
    if (!this.state.timerStart){
      if (cycles > 1){
        this.setState({ 
          cycles: cycles - 1,
          // timer: this.state.timer - cycleTime
        })
      };
      if (this.state.timerSession && this.state.cyclesStarted && cycles > 1 ){
        this.setState({ 
          cycles: cycles - 1,
          cyclesLeft: this.state.cyclesLeft - 1,
          // timer: this.state.timer - cycleTime
        })
      }
    }
  }

  resetHandler = () => {
    this.stop();
    // console.log('clicked on resetHandler');
    this.setState({
      breakLen: 5,
      sessionLen: 25,

      intervalId: null,

      cycles: 3,
      cyclesLeft: null,
      cyclesStarted: false,
      
      timer: 1500,
      timerStart: false,
      timerSession: true
    })
  }

  toggleSettingsHandler = () => {
    if (this.state.settingsClass === ''){
      this.setState({ 
        settingsClass: "slide-settings"
      });
    } else {
      this.setState({ 
        settingsClass: ""
      });
    }
  }

  timerStartHandler = () => {
    const timerStart = this.state.timerStart;

    this.setState({ 
      timerStart: !timerStart,
      cyclesStarted: true
    });

    if (!timerStart){
      // console.log('timer started');
      this.start();
    } else {
      // console.log('timer paused');
      this.stop();
    }
  };

  tick = () => {
    const audio = document.getElementById('beep');

    if (this.state.timer === 0 && this.state.timerSession) {
      audio.play();
      this.setState({
        timer: this.state.breakLen * 60,
        timerSession: false,
        cyclesLeft: this.state.cyclesLeft - 1
      })
    }

    else if (this.state.timer === 0 && !this.state.timerSession) {
      audio.play();
      this.resetHandler();
    }

    else {
      this.setState({ timer: this.state.timer - 1})
    }

  }

  start = () => {
    this.setState({
      intervalId: setInterval(this.tick,1000),
      cyclesLeft: this.state.cycles
    })
  }

  stop = () => {
    clearInterval(this.state.intervalId);
    let audio = document.getElementById('beep');
    audio.pause(); 
    audio.currentTime = 0;
  };

  displayTimer = () => {
    let minutes = Math.floor(this.state.timer / 60);
    let seconds = this.state.timer - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  }

  displayCycles = () => { 
    const circlesArr = [];

    for (let i = 0; i < this.state.cycles; i++) {
      circlesArr.push(<div key={i}className="circle-cycle"></div>);   
    }
  
    return circlesArr;
  }

  alarmSoundHandler = () => {
    console.log('alarmSoundHandler');
  }

  render() {

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
        {this.state.settingsClass !== '' ? (
        <SettingsLogo className="settings-icon" alt="settings icon"/>
      ) : (
        'x'
      )}  
        </button>
          <Timer
            timerSession = {this.state.timerSession}
            breakLen = {this.state.breakLen}
            sessionLen = {this.state.sessionLen}
            displayTimer = {this.displayTimer}
          />
          <Cycle
            timerSession = {this.state.timerSession}
            cycles = {this.state.cycles}
            cyclesStarted = {this.state.cyclesStarted}
            cyclesLeft = {this.state.cyclesLeft}
            displayCycles = {this.displayCycles}
          />
          <Settings 
            settingsClass = {this.state.settingsClass}
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
          <Start 
            timerStartClicked = {this.timerStartHandler}
            timerStart = {this.state.timerStart}
          />
        </div>
        <audio id="beep" src={coolAlarm}>
        </audio>
      </div>
    );
  }
}

export default Pomodoro;