import React, { Component } from "react";
import StrainList from "./StrainList";
import API from "../../utils/API";


class StrainContainer extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        this.searchStrain("")
    }

    searchStrain = query => {
        API.strains(query)
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
        this.searchStrain(this.state.search);
      };

    render() {
        return (
            <div>
                {/* <SearchForm
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                /> */}
                <StrainList results={this.state.results} />
                </div>
        );
    }
}

export default StrainContainer;