import React from 'react';
import {Switch, Route, Router } from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';


const generateClassname= createGenerateClassName({
    productionPrefix: 'auth'
})

export default ({history, onSignin}) =>{
    return (
    <div>
        <StylesProvider generateClassName={generateClassname}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/auth/signup"><Signup onSignin={onSignin} /></Route>
                    <Route exact path="/auth/signin"><Signin onSignin={onSignin} /></Route>
                </Switch>
            </Router>
        </StylesProvider>
    </div>)
}