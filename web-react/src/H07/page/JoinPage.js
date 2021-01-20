import React from 'react';
import {JoinBox} from "../component/JoinBox";
import {Link} from "react-router-dom";

export const JoinPage = () => {
    return <>
        <JoinBox/>
        <div>
            <div>계정이 있으신가요?</div>
            <Link to="/"><div>로그인하기</div></Link>
        </div>
    </>
}
export default JoinPage;
