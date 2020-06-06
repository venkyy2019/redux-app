import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // console.log(this.props);
        return (
            <div>
                <h1>Home page now</h1>
                <Link to="/about">About</Link>
                <Link to="/contact">Component</Link>
                <Link to="/simple-form">Simple Form</Link>
            </div>
        );
    }
}

export default Home;