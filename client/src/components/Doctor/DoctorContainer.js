import React, { Component } from "react";
import DoctorList from "./DoctorList";
import API from "../../utils/API";
import "../../css/style.css";

class DoctorListContainer extends Component {
    state = {
      results: []
    };

    componentDidMount() {
      this.searchDoctor();
    }

    searchDoctor = query => {
      API.search(query)
        .then(res => this.setState({ results: res.data.data}))
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]: value
      });
    };

    handleFormSubmit = event => {
      event.preventDefault();
      this.searchDoctor(this.state.search);
    };

    render() {
      return (
        <div>
          <br />
          <h4 className="center cyan-text">Doctors in your Area</h4>

          <DoctorList 
            results={this.state.results}
           
          />
        </div>
      );
    }
}
export default DoctorListContainer;