import React from 'react';
import './RodeTitel.scss';

function RodeTitel(props) {
  return (
    <h2 className='rode-titel'>
      <span className='tweede-kleur spacing'>{props.naam}</span>
    </h2>
  )
}

export default RodeTitel;