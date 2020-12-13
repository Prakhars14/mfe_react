import React from "react";
import ReactDOM from 'react-dom';
import App  from './App';

//Mount dynamic function  to use queryselector
const mount=(el)=>{
    ReactDOM.render(
        <App/>, el
    )
}

//Context 1 when running in dev and independently
if(process.env.NODE_ENV==='development')
{
    const el=document.querySelector("#dev-d")
    if(el){
        mount(el);
    }
}

export {mount};