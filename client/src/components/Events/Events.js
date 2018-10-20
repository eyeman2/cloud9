import React from "react";
import "../../css/style.css";

const Events = props => (
    <div>
       
       
        <a href= {props.link}> <img src= {props.image} alt = {props.alt} /> </a>
        <br/> <br/>
        <h5>{ props.title }</h5> 
        <p>{ props.date }</p>
        <p>{ props.place }</p>
    </div> 
)

export default Events;