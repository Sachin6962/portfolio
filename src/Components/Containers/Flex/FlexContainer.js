import React from 'react';
import { NavLink } from 'react-router-dom'
import './FlexContainer.scss';

function FlexItem(props) {
  return (
    <NavLink to={props.link} target="_blank" className="flex-item">
      <img src={props.imgUrl} alt=""/>
    </NavLink>
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