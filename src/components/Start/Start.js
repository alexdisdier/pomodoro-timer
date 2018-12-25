import React from 'react';
import { ReactComponent as PlayLogo } from './play.svg';
import { ReactComponent as PauseLogo } from './pause.svg';
import './Start.scss';

const start = (props) => {
  return (
    <div className="circle-play">
      <div id="start_stop" className="circle-play-content" onClick={props.timerStartClicked}>

      {!props.timerStart ? (
        <PlayLogo className="play-icon" alt="play icon"/>
      ) : (
        <PauseLogo className="play-icon" alt="play icon"/>
      )}

      </div>
    </div>
  );
}

export default start;