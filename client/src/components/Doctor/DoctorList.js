import React from "react";

const styles = {
  doctors: {
    display: "inline-block",
    margin: "10px",
  }
}

// const imageOpt = (image) => {
//   if (result.profile.image_url === "https://asset2.betterdoctor.com/assets/general_doctor_female.png" || result.profile.image_url === "https://asset2.betterdoctor.com/assets/general_doctor_male.png"){
//     result.profile.image_url = doctor
//   } 
// };

const DoctorList = props => (
  <div>
    <div className="row container">
    {props.results.map(result => (
      <div key={result.profile.first_name} className="col s12 m12 l6">
      <div  style={styles.doctors} >
      
        <img
          alt={result.profile.first_name}
          className="img-fluid"
          src={result.profile.image_url}
        />
        <h3> {result.practices[0].name}</h3>

        <h5> {result.practices[0].visit_address.street} </h5>
        <h5> {result.practices[0].visit_address.city} {result.practices[0].visit_address.state} {result.practices[0].visit_address.zip} </h5>  
        <h5> Phone # : {result.practices[0].phones[0].number}  </h5> 
      </div>
      </div>
    ))}
    </div>
  </div>
);

export default DoctorList;

// import React from "react";

// const styles = {
//   doctors: {
//     display: "inline-block",
//     margin: "10px",
//   }
// }

// // const imageOpt = (image) => {
// //   if (result.profile.image_url === "https://asset2.betterdoctor.com/assets/general_doctor_female.png" || result.profile.image_url === "https://asset2.betterdoctor.com/assets/general_doctor_male.png"){
// //     result.profile.image_url = doctor
// //   } 
// // };

// const DoctorList = props => (
//   <div>
//     <div className="row container">
//     {props.results.map((result, i) => (
//       <div className="col s12 m12 l6">
//       <div   key={props.i} style={styles.doctors} >
      
//         <img
//           alt={result.profile.first_name}
//           className="img-fluid"
//           src={result.profile.image_url}
//         />
//         <h3> {result.practices[0].name}</h3>

//         <h5> {result.practices[0].visit_address.street} </h5>
//         <h5> {result.practices[0].visit_address.city} {result.practices[0].visit_address.state} {result.practices[0].visit_address.zip} </h5>  
//         <h5> Phone # : {result.practices[0].phones[0].number}  </h5> 
//       </div>
//       </div>
//     ))}
//     </div>
//   </div>
// );

// export default DoctorList;