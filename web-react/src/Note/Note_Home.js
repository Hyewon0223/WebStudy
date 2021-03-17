import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Header from "./component/Header";

const HeadColor = ['#FFF4B9','#B9D1FF','#94FF9F','#D288FF','#676767'];
const ContentColor = ['#FFFBE5','#E1EBFF','#D8FFDC','#EFD4FF','#C4C4C4'];

export const Note_Home = () => {
    // window.localStorage.setItem('UserName', 'Hyewon');
    // window.localStorage.setItem('Theme', 0);

    const UserName = window.localStorage.getItem("UserName");
    const UserTheme = window.localStorage.getItem("Theme");

    return <>
        <Wrap style={{backgroundColor:ContentColor[UserTheme]}}>
            <Header state={'Home'} color={HeadColor[UserTheme]}/>
        </Wrap>
    </>
}

export default Note_Home;

const Wrap = styled.div`
  height: 100vh;
`