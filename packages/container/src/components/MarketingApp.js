import {mount} from 'marketing/Home';
import React, {useRef, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

export default ()=>{
    const history=useHistory();

    useEffect(() => {
        const {onParentNavigate}=mount(ref.current, {
            initialPath:history.location.pathname,
            onNavigate:({pathname: nextPathname})=>{
                const {pathname}=history.location;

                if(pathname!=nextPathname){
                    history.push(nextPathname);
                }
            }
        });

        history.listen(onParentNavigate);

    }, [])

    const ref = useRef(null);

    return <div ref={ref}/>
}