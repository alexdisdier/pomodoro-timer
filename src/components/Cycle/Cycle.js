import React from 'react';
import './Cycle.scss';

const cycle = (props) => {
  const circles = <div className="circle-cycle"></div>

  return (
    <div>
      <div className="circle-cycle-container">
        {circles}
        {circles}
        {circles}
        {circles}
      </div>
      <div className="cycle-slogan">Stay Focused</div>
    </div>
    
  )
};

export default cycle;