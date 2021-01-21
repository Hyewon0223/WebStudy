import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TLPage from './page/TimeLinePage';
import MainPage from './page/MainPage';
import MyPage from './page/MyPage';

const H05 = () => {
    return (
        <Router>
            <div>
                <Route exact path='/MainPage' component={MainPage}/>
                <Route path='/TimeLine' component={TLPage}/>
                <Route path='/MyPage' component={MyPage}/>
            </div>
        </Router>
    )
}

export default H05;
