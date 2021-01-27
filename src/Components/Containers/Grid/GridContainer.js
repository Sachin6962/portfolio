import React from 'react';
import { Link } from 'react-router-dom'
import './GridContainer.scss';

function GridItem(props) {
  return (
    <Link to={props.link} target="_blank" className="grid-item">
        <img src={props.imgUrl} alt="logo"/>
    </Link>
  )
}

function GridContainer(props) {
  return (
    <section className="grid-container">
      <GridItem 
        link = {props.link1}
        imgUrl = {props.imgUrl1}
      />
      <GridItem 
        link = {props.link2}
        imgUrl = {props.imgUrl2}
      />
      <GridItem 
        link = {props.link3}
        imgUrl = {props.imgUrl3}
      />
      <GridItem 
        link = {props.link4}
        imgUrl = {props.imgUrl4}
      />
      <GridItem 
        link = {props.link5}
        imgUrl = {props.imgUrl5}
      />
      <GridItem 
        link = {props.link6}
        imgUrl = {props.imgUrl6}
      />
    </section>
  )
}

export default GridContainer;