import React, { Component } from "react";
import DoctorContainer from "../Doctor/DoctorContainer";
import Jumbotron from "../Jumbotron";
import Footer from "../Footer";
import WeeklyContainer from "../Weekly/WeeklyContainer";

import Food from "./Food";
import EventContainer from "../Events/EventsContainer";
// import EventCar from "../Events/EventCar";
import { Carousel } from "react-materialize";

class Home extends Component {
    state = {

    };

    render() {
      return(
        <div>
 <Carousel images={[
  'https://via.placeholder.com/350x150',
  'https://via.placeholder.com/350x150',
  'https://via.placeholder.com/350x150',
  'https://via.placeholder.com/350x150',
  'https://via.placeholder.com/350x150'
]} />
          <Jumbotron/>
          <WeeklyContainer/>
          <EventContainer/>
          <Food/>
          <DoctorContainer/>
          <Footer/>
        </div>
      );
    }
}

export default Home;