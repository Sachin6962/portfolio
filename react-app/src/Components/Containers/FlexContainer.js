import React from 'react';
import './FlexContainer.scss';

function FlexItem(props) {
  return (
    <a href={props.href} target="_blank" className="flex-item">
      <img src={props.imgUrl} alt=""/>
    </a>
  )
}

function FlexContainer(props) {
  return (
    <section>
      <div className='flex-web'>
        <FlexItem 
          href={props.href1}
          imgUrl={props.imgUrl1}
        />
        <FlexItem 
          href={props.href2}
          imgUrl={props.imgUrl2}
        />
        <FlexItem 
          href={props.href3}
          imgUrl={props.imgUrl3}
        />
      </div>
    </section>
  )
}

export default FlexContainer;