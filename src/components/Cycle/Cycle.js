import React from 'react';
import './Cycle.scss';

const cycle = (props) => {

  const circlesArr = [];

    for (let i = 0; i < props.cycles; i++) {
      circlesArr.push(<div key={i}className="circle-cycle"></div>);   
    };

  return (
    <div>
      <div className="circle-cycle-container">
        {/* {props.displayCycles()} */}
        {circlesArr} 
      </div>
      <div className="cycle-slogan">{props.timerSession ? 'Stay Focused' : 'Get a coffee'}</div>
    </div> 
  )
};

export default cycle;