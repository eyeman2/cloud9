import React, {Component} from "react";
import "../../css/style.css";
// import {Carousel} from "react-materialize";
import EventsContainer from "./EventsContainer";

const styles = {
    sel: {
        visibility: "visible"
    }
}
class EventCar extends Component {

    render() {
        const settings = {

            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidestoScroll: 1
        };

        return(
            <EventsContainer {...settings}/>

        )
    }
}

export default EventCar;