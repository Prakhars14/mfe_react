import {mount} from 'auth/Home';
import React, {useRef, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

export default ({onSignin})=>{
    const history=useHistory();

    useEffect(() => {
        const {onParentNavigate}=mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate:({pathname: nextPathname})=>{
                const {pathname}=history.location;

                if(pathname!=nextPathname){
                    history.push(nextPathname);
                }
            },
            onSignin,
        });

        history.listen(onParentNavigate);

    }, [])

    const ref = useRef(null);

    return <div ref={ref}/>
}