import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import {LogInPage} from '../H07/page/LogInPage';
import {JoinPage} from '../H07/page/JoinPage';
import MainPage from "../H05/page/MainPage";
import TimeLinePage from "../H08/page/TimeLinePage";
import MyPage from "../H05/page/MyPage";

export const H07_Join_LogIn = () => {
    return <>
        <Router>
            <div>
                <Route exact path='/' component={LogInPage}/>
                <Route path='/Join' component={JoinPage}/>
                <Route path='/MainPage' component={MainPage}/>
                <Route path='/TimeLinePage' component={TimeLinePage}/>
                <Route path='/MyPage' component={MyPage}/>
            </div>
        </Router>
    </>

}

export default H07_Join_LogIn;
