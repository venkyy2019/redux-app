import React, { Component } from 'react';
import  {Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div>
                <h1>About page </h1>
                <Link to="/simple-form">Simple Form</Link>
                <Link exact to="/">Home</Link>
                <Link to="/contact">Contact</Link>
            </div>
        );
    }
}

export default About;