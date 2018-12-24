import React from 'react';
import './Cycle.scss';

const cycle = (props) => {

  const circlesArr = [];
  for (let i = 0; i < props.cycles; i++) {
    circlesArr.push(<div key={i}className="circle-cycle"></div>);
  }

  return (
    <div>
      <div className="circle-cycle-container">
        {circlesArr}
      </div>
      <div className="cycle-slogan">Stay Focused</div>
    </div>
    
  )
};

export default cycle;