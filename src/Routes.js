//Import dependences
import { Switch, Redirect, Route } from 'react-router-dom';
import {
    home as HomeView,
} from "./views"

import React from 'react';

/**
 * create a functional object for route control
 * Routes
 *      / ro redirect /login
 *      /login
 *      /inbox
 *      /not-found
 */
const Routes = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/home"/>
            <Route path="/home" component={HomeView}/>
        </Switch>
    )
}

//Export that
export default Routes;