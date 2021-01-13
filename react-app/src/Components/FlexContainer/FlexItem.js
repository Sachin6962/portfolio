import React from 'react';

function FlexItem(props) {
  return (
    <a href={props.href} target="_blank" className="flex-item">
      <img src={props.imgUrl} alt=""/>
    </a>
  )
}

export default FlexItem;