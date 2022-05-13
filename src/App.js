/* eslint-disable */

import React, {useContext, useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Help from './Components/Help';
import Certifacate from './Components/Certifacate';
import NotFound from './Components/NotFound';



export default function App() {

    return (
        <div className="App">
            <Menu></Menu>

            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/help" component={Help}></Route>
                <Route exact path="/certificate" component={Certifacate}></Route>

                {/* <Route path="/:id">
                    <div>404</div>
                </Route> */}

                <Route exact path="/404" component={NotFound}></Route>
                <Route path="*">
                    <Redirect to="/404"/>
                </Route>
            </Switch>

            <Footer></Footer>
        </div>
    );
}
