import React from "react";
import ReactDOM from 'react-dom';
import App  from './App';
import {createMemoryHistory, createBrowserHistory} from 'history';

//Mount dynamic function  to use queryselector
const mount=(el, {onNavigate, defaultHistory, initialPath, onSignin})=>{
    const history=defaultHistory || createMemoryHistory({
        initialEntries:[initialPath]
    });
    
    onNavigate&&history.listen(onNavigate);

    ReactDOM.render(
        <App history={history} onSignin={onSignin}/>, el
    )

    return {
        onParentNavigate({pathname: nextPathname}) {
            const {pathname}=history.location;
            if(pathname!==nextPathname){
                history.push(nextPathname);
            }
        }
    }
}

//Context 1 when running in dev and independently
if(process.env.NODE_ENV==='development')
{
    const el=document.querySelector("#dev-auth")
    if(el){
        mount(el, {defaultHistory: createBrowserHistory()});
    }
}

export {mount};