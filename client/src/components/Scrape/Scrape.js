import React from "react";
import "./Scrape.css";


const Scrape = props => (
    
  <div>
    <h3> {props.title} </h3>
       
    <a href= {props.link}><img src= {props.image} alt={props.title}/> <br/> <br/> {props.children}</a> <br/><br/>

  </div>

);

export default Scrape; 