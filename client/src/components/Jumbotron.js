import React from "react";
import "../css/style.css";
import Header from "../images/c9-header-cloud.png";
import bokeh from "../images/first.jpg";

const styles = {
  header: { 
    backgroundImage: "url(" + bokeh + ")",
    position: "relative", 
    height: "400px"
  },
  icon: {
    height: "281px",
    width: "453px",
    marginRight: "auto",
    marginLeft: "auto"
  },
  button: {
    position: "absolute",
    bottom: "800px"
  }, 
}

const Jumbotron = () => (

  <div>
  <div style={styles.header}>
    <div className="section no-pad-bot">
      <div className="container">
        <div className="row center">
        <img style={styles.icon} src={Header} alt="c9"/>

        </div>
      </div>
    </div>
  </div>
  </div>
);

export default Jumbotron;