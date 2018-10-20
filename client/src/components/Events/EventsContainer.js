import React, { Component } from "react";
import "../../css/style.css";
import events from "../../events36.json"
import Events from "./Events";
import { Carousel } from "react-materialize";

const styles = {
  recipeCon: {
    height: "960px",
    backgroundColor: "#80deea"
  },
  recipeMod: {
    height: "90%"
  }
}

class EventsContainer extends Component {
    state = {};

    render () {
        return (
   <div style={styles.recipeCon} className="recipeBox">   
        <div  className="container center">
        <br/>
        <div className="row">
              <div className="col s12 m6">
              <h2><i>Upcoming Events</i></h2>
                <div className="recipe">
    {events.map((event, i) => (
      <Carousel options = {{ fullWidth: false }}>
        <Events
          key={i}
          title= {event.title}
          image= {event.image}
          link= {event.link}
          date= {event.date}
          alt= {event.alt}
          location= {event.place}
          
        />
        </Carousel>
      ))}
              </div>

       
</div>
</div>
</div>

    </div>
         ) }
} 

export default EventsContainer;