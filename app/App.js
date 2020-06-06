import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import SimpleForm from './SimpleForm';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './index.css';

const history = createBrowserHistory();

class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Example App</h1>
                <Router history={history}>  
                    <Switch>
                        <Route exact path="/"  component={Home} />    
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/simple-form" component={SimpleForm} />                   
                    </Switch>
                </Router>
            </div>
        )
    }
};

export default App;