import React from "react";
import HomePage from '../HomePage/Home'
import Signin from '../HomePage/signin'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import Cookies from 'js-cookie'
import BlogApp from '../blog/BlogHome'

function App(){
    const loggedIn = true;
    return (
        <Router>
            <Route path="/" exact component={BlogApp}/>
            <Route path="/signin" component={Signin}/>
        </Router>   
    )
}

export default App;