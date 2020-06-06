import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {
    render() {
        return (
            <div>
                <h1>Contact Page </h1>
                <Link to="/about">About</Link>
                <Link exact to="/">Home</Link>
                <Link to="/simple-form">Simple Form</Link>
            </div>
        );
    }
}

export default Contact;