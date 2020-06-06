import React, { Component } from 'react';
import {Link }from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUser } from './actions';

class SimpleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            ...this.state,
            username: event.target.value,
            email: event.target.value,
            password: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
        this.props.setUser(this.state);
        this.setState({
            username: '',
            password: '',
            email: ''
        })
       
    }
    handleClick(event) {
        event.preventDefault()
    }
    render() {
       console.log('Props from stte>>>>>', this.props);
        return (
            <div>
                <Link  to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Usernaem</label>
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>email</label>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user:state
    }
}

function mapStateToDispatch(dispatch) {
    return bindActionCreators({setUser},dispatch);
}

export default connect(null,
                       mapStateToDispatch)(SimpleForm);