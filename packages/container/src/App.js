import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from "./components/Header";
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';

const generateClassname= createGenerateClassName({
    productionPrefix: 'cont'
})

export default()=>{
    return(
        <>
            <StylesProvider generateClassName={generateClassname}>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <MarketingApp/>
                    </div>
                </BrowserRouter>
            </StylesProvider>
        </>
    ) ;
};
