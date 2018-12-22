import React from 'react';
import logo, { ReactComponent as PlayLogo } from './play.svg';
import './Start.scss';

const start = (props) => {
  return (
    <div className="circle-play">
      <div className="circle-play-content" onClick={props.timerStartClicked}>

      {!props.timerStart ? (
        <PlayLogo className="play-icon" alt="play icon"/>
      ) : (
        '||'
      )}

      </div>
    </div>
  );
}

export default start;