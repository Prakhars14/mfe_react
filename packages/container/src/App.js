import React, {lazy, Suspense, useState} from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import ProgressBar from './components/ProgressBar';

const MarketingLazy=lazy(()=>import('./components/MarketingApp'));
const AuthLazy=lazy(()=>import('./components/AuthApp'));

const generateClassname= createGenerateClassName({
    productionPrefix: 'cont'
})

export default()=>{
    const [isSignedin,setSignedin]=useState(false);
    return(
        <>
            <StylesProvider generateClassName={generateClassname}>
                <BrowserRouter>
                    <div>
                        <Header isSignedin={isSignedin} onSignOut={()=>setSignedin(false)}/>
                        <Suspense fallback={<ProgressBar/>}>
                        <Switch>
                            <Route path="/auth"><AuthLazy onSignin={()=>setSignedin(true)} /></Route>
                            <Route path="/" component={MarketingLazy} />
                        </Switch>
                        </Suspense>
                    </div>
                </BrowserRouter>
            </StylesProvider>
        </>
    ) ;
};
