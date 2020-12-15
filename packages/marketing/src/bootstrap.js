import React from "react";
import ReactDOM from 'react-dom';
import App  from './App';
import {createMemoryHistory, createBrowserHistory} from 'history';

//Mount dynamic function  to use queryselector
const mount=(el, {onNavigate, defaultHistory, initialPath})=>{
    const history=defaultHistory || createMemoryHistory({
        initialEntries:[initialPath]
    });
    
    onNavigate&&history.listen(onNavigate);

    ReactDOM.render(
        <App history={history} />, el
    )

    return {
        onParentNavigate({pathname: nextPathname}) {
            if(history.location.pathname!=nextPathname){
                history.push(nextPathname);
            }
        }
    }
}

//Context 1 when running in dev and independently
if(process.env.NODE_ENV==='development')
{
    const el=document.querySelector("#dev-d")
    if(el){
        mount(el, {defaultHistory: createBrowserHistory()});
    }
}

export {mount};