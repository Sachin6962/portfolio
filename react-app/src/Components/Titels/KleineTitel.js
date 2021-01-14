import React from 'react';
import './KleineTitel.scss';

function KleineTitel(props) {
  return (
    <h2 className='kleine-titel'>
      <span className={props.classes}>{props.naam}</span>
    </h2>
  )
}

export default KleineTitel;