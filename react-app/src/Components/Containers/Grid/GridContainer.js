import React from 'react';
import './GridContainer.scss';

function GridItem(props) {
  return (
    <a href={props.href} target="_blank" className="grid-item">
        <img src={props.imgUrl} alt="logo"/>
    </a>
  )
}

function GridContainer(props) {
  return (
    <section className="grid-container">
      <GridItem 
        href = {props.href1}
        imgUrl = {props.imgUrl1}
      />
      <GridItem 
        href = {props.href2}
        imgUrl = {props.imgUrl2}
      />
      <GridItem 
        href = {props.href3}
        imgUrl = {props.imgUrl3}
      />
      <GridItem 
        href = {props.href4}
        imgUrl = {props.imgUrl4}
      />
      <GridItem 
        href = {props.href5}
        imgUrl = {props.imgUrl5}
      />
      <GridItem 
        href = {props.href6}
        imgUrl = {props.imgUrl6}
      />
    </section>
  )
}

export default GridContainer;