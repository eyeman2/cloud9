import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import API from '../utils/API';
import googleImage from "../images/btn_google_signin_dark_normal_web.png";
// import { Row, Wrapper, Col } from './BootstrapGrid';

const styles = {
    header: {
        color: 'white',
        textAlign: 'center',
        marginLeft: '400px'
    },
    gImg: {
        height: '450px',
        width: '140px'
    },
    email: { marginRight: '20px'}
}

class Signup extends Component {
    state = {
        redirectTo: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    textInput = React.createRef();

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value})
    };

    handleSignUp = event => {
        event.preventDefault();
        API.login({ email: this.state.email, password: this.state.password})
        .then((res) => {
            this.props.setUser(res.data.user)
            this.setState({
                redirectTo: '/'
            });
        })
        .catch(err => console.log("Error exectuing handleSignup: ", err));
    }

    handleLogin = event => {
        event.preventDefault();
        API.login({ email: this.state.email, password: this.state.password})
        .then((res) => {
            this.props.setUser(res.data.user)
            this.setState({
                redirectTo: '/'
            });
        })
        .catch(err => console.log("Error exectuing handleLogin: ", err))
    }

    googleSignUp = event => {
        event.preventDefault();
        API.googleSignup()
        .then(res => {

        })
        .catch(err => console.log("Error exectuing googleSignUp: ", err));
    }

    componentDidMount(){
        this.textInput.current.focus();
    }

    render() {
        if(this.state.redirectTo){
            return <Redirect to = { this.state.redirectTo } /> 
        }

        return (
            <div style={styles.header}>
                <ul className = 'center'>
                    <li><input style={styles.email} span={2} offset={3} 
                    placeholder="Email" 
                    ref={this.textInput} 
                    name="email" 
                    type="text" 
                    value={this.state.email}
                    required onChange={this.handleInputChange} />
                    </li>
                    <li><a className = 'waves-effect waves-yellow' onClick = { this.handleSignUp }>Sign Up</a></li>
                    <li><a className = 'waves-effect waves-light' onClick = { this.handleLogin }>Log in</a></li>
                    <li><Link to ="/auth/google" 
                    target="_self">
                    <img style={styles.gImg} 
                    src={googleImage} 
                    alt="Sign in with Google" />
                    </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Signup;