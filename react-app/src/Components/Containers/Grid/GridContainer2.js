import React from 'react';
import './GridContainer2.scss';

function GridItem(props) {
  return (
    <div className="grid-item">
      <i className={props.icoon}></i><br/>
      <span>{props.text}</span>
    </div>
  )
}

function GridContainer2(props) {
  return (
    <section>
      <div className="grid-container2">
        <GridItem 
          icoon = {props.icoon1}
          text = {props.text1}
        />
        <GridItem 
          icoon = {props.icoon2}
          text = {props.text2}
        />
        <GridItem 
          icoon = {props.icoon3}
          text = {props.text3}
        />
        <GridItem 
          icoon = {props.icoon4}
          text = {props.text4}
        />
        <GridItem 
          icoon = {props.icoon5}
          text = {props.text5}
        />
        <GridItem 
          icoon = {props.icoon6}
          text = {props.text6}
        />
        <GridItem 
          icoon = {props.icoon7}
          text = {props.text7}
        />
        <GridItem 
          icoon = {props.icoon8}
          text = {props.text8}
        />
      </div>
    </section>
  )
}

export default GridContainer2;