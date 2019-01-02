import React, { Component } from 'react';
import './Settings.scss';

import Session from './Session/Session';
import Break from './Break/Break';
import Cycle from './Cycle/Cycle';

// source for click outside component: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

class Settings extends Component {
  constructor(props){
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseout',this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    // console.log('You clicked outside of settings!');
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)&& this.props.settingsClass === "") {
      this.props.toggleSettingsHandler();
    }
  }

  render() {
    let style;
    let close;

    if (this.props.settingsClass === ""){
      style = {
        boxShadow: "-8px 0px 25px -10px rgba(0,0,0,1)"
      }
      close = 'X';
    }

  return (
    <div id="settings" style={style} className={this.props.settingsClass} ref={this.setWrapperRef}>
      <button id="toggle-settings" onClick={this.props.toggleSettingsHandler}>
        {close}  
      </button>
      <Session
        sessionLen = {this.props.sessionLen}
        incSessionHandler = {this.props.incSessionHandler}
        decSessionHandler = {this.props.decSessionHandler}
      />
      <Break 
        breakLen = {this.props.breakLen}
        incBreakHandler = {this.props.incBreakHandler}
        decBreakHandler = {this.props.decBreakHandler}
      />
      <Cycle
        cycles = {this.props.cycles}
        incCycleHandler = {this.props.incCycleHandler}
        decCycleHandler = {this.props.decCycleHandler}
      />
      <button id="reset" className = "reset-btn"
        onClick={this.props.resetHandler}>Reset Default
      </button>
    </div>
  )
  }
};

export default Settings;