import React from 'react';
import { Link } from 'react-router-dom'
import './FlexContainer.scss';

function FlexItem(props) {
  return (
    <Link to={props.link} target="_blank" className="flex-item">
      <img src={props.imgUrl} alt=""/>
    </Link>
  )
}

function FlexContainer(props) {
  return (
    <section className='flex-container'>
        <FlexItem 
          link={props.link1}
          imgUrl={props.imgUrl1}
        />
        <FlexItem 
          link={props.link2}
          imgUrl={props.imgUrl2}
        />
        <FlexItem 
          link={props.link3}
          imgUrl={props.imgUrl3}
        />
    </section>
  )
}

export default FlexContainer;