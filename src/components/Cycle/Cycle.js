import React from 'react';
import './Cycle.scss';

const cycle = (props) => {

  const circlesArr = [];

  const pastCycles = props.cycles - props.intervalCycles;

  for (let i = 0; i < props.cycles; i++) {
    circlesArr.push(<div key={i}className="circle-cycle active"></div>);   
  };

  if (props.timerSession){
    if (pastCycles === 1){
      circlesArr.splice(0, 1, <div key='0' className="circle-cycle active session-circle-active"></div>);
    }
  
    else if (pastCycles === 2){
      circlesArr.splice(0, 2, 
      <div key='0' className="circle-cycle active session-circle-active"></div>,
      <div key='1' className="circle-cycle active session-circle-active"></div>);
    }
  
    else if (pastCycles === 3){
      circlesArr.splice(0, 3, 
      <div key='0' className="circle-cycle active session-circle-active"></div>,
      <div key='1' className="circle-cycle active session-circle-active"></div>,
      <div key='3' className="circle-cycle active session-circle-active"></div> );
    }
  }

  else if (!props.timerSession) {
    if (pastCycles === 1){
      circlesArr.splice(0, 1, <div key='0' className="circle-cycle active break-circle-active"></div>);
    }
  
    else if (pastCycles === 2){
      circlesArr.splice(0, 2, 
      <div key='0' className="circle-cycle active session-circle-active"></div>,
      <div key='1' className="circle-cycle active break-circle-active"></div>);
    }
  
    else if (pastCycles === 3){
      circlesArr.splice(0, 3, 
      <div key='0' className="circle-cycle active break-circle-active"></div>,
      <div key='1' className="circle-cycle active break-circle-active"></div>,
      <div key='3' className="circle-cycle active break-circle-active"></div> );
    }
  }
  
  return (
    <div>
      <div className="circle-cycle-container">
        {circlesArr} 
      </div>
      <div className="cycle-slogan">{props.timerSession ? 'Stay Focused' : 'Get a coffee'}</div>
    </div> 
  )
};

export default cycle;