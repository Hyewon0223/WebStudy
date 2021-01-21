import React from 'react';
import {JoinBox} from "../component/JoinBox";
import {Link} from "react-router-dom";

export const JoinPage = () => {
    return <>
        <div id = "basic">
            <div id = "Box">
                <JoinBox/>
            </div>
            <div id = "Box">
                <div id="ask">
                    <div id="qq">계정이 있으신가요?</div>
                    <div id="aa"><Link to="/">로그인하기</Link></div>
                </div>
            </div>
        </div>
    </>
}
export default JoinPage;
