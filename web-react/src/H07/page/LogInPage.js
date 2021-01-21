import React from 'react';
import {LogInBox} from '../component/LogInBox';
import {Link} from "react-router-dom";
import './LoginPage.css';

export const LogInPage = () => {
    return <>
        <div id = "basic">
                <div id = "Box">
                    <LogInBox/>
                </div>
                <div id = "Box">
                    <div id="ask">
                        <div id="qq">계정이 없으신가요?</div>
                        <div id="aa"><Link to="/Join">가입하기</Link></div>
                    </div>
                </div>
        </div>
    </>
}

export default LogInPage;
