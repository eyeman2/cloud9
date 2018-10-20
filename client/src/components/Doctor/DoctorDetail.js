import React from "react";

const DoctorDetail = props => (
  <div className="text-center">
    <img
      alt={props.title}
 
      src={props.src}
      style={{ margin: "0 auto" }}
    />
    <h3>Doctor Name: {props.practices.name}</h3>
    <h3>Location: {props.visit_address}</h3>
    <h3>Phone Number: {props.number}</h3>
  </div>
);

export default DoctorDetail;