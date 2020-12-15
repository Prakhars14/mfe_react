import React, {lazy, Suspense, useState, useEffect} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import Header from "./components/Header";
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import ProgressBar from './components/ProgressBar';
import {createBrowserHistory} from 'history';

const MarketingLazy=lazy(()=>import('./components/MarketingApp'));
const AuthLazy=lazy(()=>import('./components/AuthApp'));
const DashbaordLazy=lazy(()=>import('./components/DashboardApp'));

const generateClassname= createGenerateClassName({
    productionPrefix: 'cont'
})

const history=createBrowserHistory();

export default()=>{
    const [isSignedin,setSignedin]=useState(false);

    useEffect(() => {
        if(isSignedin){
            history.push('/dashboard');
        }
    }, [isSignedin])

    return(
        <>
            <StylesProvider generateClassName={generateClassname}>
                <Router history={history}>
                    <div>
                        <Header isSignedin={isSignedin} onSignOut={()=>setSignedin(false)}/>
                        <Suspense fallback={<ProgressBar/>}>
                        <Switch>
                            <Route path="/auth"><AuthLazy onSignin={()=>setSignedin(true)} /></Route>
                            <Route path="/dashboard">{!isSignedin&&<Redirect to="/"/>}<DashbaordLazy /></Route>
                            <Route path="/" component={MarketingLazy} />
                        </Switch>
                        </Suspense>
                    </div>
                </Router>
            </StylesProvider>
        </>
    ) ;
};
