import React from 'react';
import './FlexContainer3.scss';

function FlexItem(props) {
  return (
    <div className="flex-item">
      <img src={props.imgUrl}/>
      <h3>{props.titel}</h3>
      <p>{props.info}</p>
    </div>
  )
}

function FlexContainer3(props) {
  return (
    <div className="flex-container">
      <FlexItem
        imgUrl={props.imgUrl1}
        titel={props.titel1}
        info={props.info1}
      />
      <FlexItem
        imgUrl={props.imgUrl2}
        titel={props.titel2}
        info={props.info2}
      />
      <FlexItem
        imgUrl={props.imgUrl3}
        titel={props.titel3}
        info={props.info3}
      />
    </div>
  )
}

export default FlexContainer3;