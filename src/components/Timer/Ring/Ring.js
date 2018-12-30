import React, { Component } from 'react';
import './Ring.scss';

class Ring extends Component {
  constructor(props) {
    super(props);
    
    const { radius, stroke } = this.props;
    
    this.normalizedRadius = radius - stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }
  
  render() {
    const { radius, stroke, progress, timerSession } = this.props;

    let progressTimer;

    if (timerSession){
      progressTimer = this.props.sessionLen * 60;
    }
    else {
      progressTimer = this.props.breakLen * 60;
    }

    const strokeDashoffset = this.circumference - progress / progressTimer * this.circumference;
  
    return (
      <svg className="svg-circle"
        height={radius * 2}
        width={radius * 2}
       >
        <circle 
          stroke='#fff'
          fill="transparent"
          cx={ radius }
          cy={ radius } 
          r={ this.normalizedRadius }
          strokeWidth={ stroke }
        />
        <circle
          stroke= { timerSession ? '#B6371D' : '#59C8C6'}
          fill="transparent"
          strokeWidth={ stroke }
          strokeDasharray={ this.circumference + ' ' + this.circumference }
          style={ { strokeDashoffset } }
          stroke-width={ stroke }
          r={ this.normalizedRadius }
          cx={ radius }
          cy={ radius }
         />
      </svg>
    );
  }
}

export default Ring; 