import React from 'react';
import './KleineTitel.scss';

function KleineTitel(props) {
  return (
    <h2 className='kleine-titel'>{props.naam}</h2>
  )
}

export default KleineTitel;