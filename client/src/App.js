import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Signup, NoMatch } from './components';
import Home from './components/Pages/Home';
import API from './utils/API';
import Navbar from './components/Navbar';
// import Footer from '../src/components'
import './App.css';


class App extends Component {
  state = {
    loggedIn: false,
    user: null,
    email: "",
    password: ""
  }

  setUser = (user) => {
    console.log("USER", user);
    this.setState({
      user, 
      loggedIn: true
    })
  }

  handleLogout = () => {
    API.logout()
    .then(() => {
      this.setState({
        user: null,
        loggedIn: false
      });
    })
    .catch( err=> console.log("Error executing handleLogout: ", err));
  }

  // componentDidMount() {
  //   API.getCurrentUser()
  //   .then(res => {
  //     this.setState({
  //       user: res.data.user,
  //       loggedIn: res.data.user || false
  //         })
  //   })
  // }

  render() {
    return (
      
      <Router>
        <div>
          <Navbar loggedIn = { this.state.loggedIn } logout = { this.handleLogout }/>
          <Switch>
            <Route exact path='/' render = {() => <Home loggedIn= {this.state.loggedIn} user = { this.state.user}/>} />
            <Route exact path = '/signup' component = {Signup} />
            <Route exact path = '/login' render = {() => <Signup setUser = {this.setUser}/> } />
            <Route component = {NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
