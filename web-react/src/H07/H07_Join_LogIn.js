import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {LogInPage} from './page/LogInPage';
import {JoinPage} from './page/JoinPage';

export const H07_Join_LogIn = () => {
    return <>
        <Router>
            <div>
                <Route exact path='/' component={LogInPage}/>
                <Route path='/Join' component={JoinPage}/>
            </div>
        </Router>
    </>

}

export default H07_Join_LogIn;
