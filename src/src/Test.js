import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import NaviBar from './Components/NavBar.js'

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import {Home} from './Home.js';
import {About} from './About.js';




const App = () => {
    return(
        <div >
            <Router>
                <NaviBar />
                <Switch>

                    <Route exact path='/' component = {Home}/>
                    <Route exact path='/about' component = {About}/>

                </Switch>
            </Router>
        </div>
    )
}



export default App;
