import React from 'react';
import './FlexContainer2.scss';

function FlexItem1(props) {
  return (
    <div className="flex-item1">
      <img src={props.imgUrl}/>
    </div>
  )
}
function FlexItem2(props) {
  return (
    <div className="flex-item2">
      <div>
        <h3>{props.titel}</h3>
        <p>{props.info}</p>
        <p>{props.uitleg}</p>
      </div>
    </div>
  )
}

function FlexContainer2(props) {
  return (
    <section className='flex-container'>
      <FlexItem1
        imgUrl={props.imgUrl}
      />
      <FlexItem2
        titel={props.titel}
        info={props.info}
        uitleg={props.uitleg}
      />
    </section>
  )
}

export default FlexContainer2;