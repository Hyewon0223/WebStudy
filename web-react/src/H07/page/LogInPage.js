import React from 'react';
import {LogInBox} from '../component/LogInBox';
import {Link} from "react-router-dom";

export const LogInPage = () => {
    return <>
        <LogInBox/>
        <div>
            <div>계정이 없으신가요?</div>
            <Link to="/Join"><div>가입하기</div></Link>
        </div>
    </>
}

export default LogInPage;
