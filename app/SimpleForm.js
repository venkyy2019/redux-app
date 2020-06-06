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
            loading:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            ...this.state,
            [event.target.name]:event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        const { loading, ...user} = this.state;
        this.props.setUser(user);
        this.setState({
            username: '',
            password: '',
            email: '',
            loading: true
        })
       
    }
    handleClick(event) {
        event.preventDefault()
    }
    render() {
    //    console.log('Props from stte>>>>>', this.props.user);
       const {username, email, password} = this.props.user;
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
                <hr />
                <div>
                   {this.state.loading && (
                     <div>
                        <p>User Name: {username}</p>
                        <p>User Email: {email}</p>
                        <p>Password: {password}</p>
                     </div>)}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('line 92', state);
    return {
        user:state.reducerFunction
    }
}

function mapStateToDispatch(dispatch) {
    return bindActionCreators({setUser},dispatch);
}

export default connect(mapStateToProps,
                       mapStateToDispatch)(SimpleForm);