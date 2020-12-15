import {createApp} from 'vue';
import Dashboard from './components/Dashboard.vue';

//Mount dynamic function  to use queryselector
const mount=(el)=>{

    const app= createApp(Dashboard);

    app.mount(el);
}

//Context 1 when running in dev and independently
if(process.env.NODE_ENV==='development')
{
    const el=document.querySelector("#dev-dashboard")
    if(el){
        mount(el);
    }
}

export {mount};