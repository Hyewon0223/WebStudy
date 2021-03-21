import React, {useState,useEffect} from 'react';
import Header from "../component/Header";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Write from "../component/Write";
import styled from 'styled-components';

const HeadColor = ['#FFF4B9','#B9D1FF','#94FF9F','#D288FF','#676767'];
const ContentColor = ['#FFFBE5','#E1EBFF','#D8FFDC','#EFD4FF','#C4C4C4'];

export const Note_Write = () => {
    const UserName = window.localStorage.getItem("UserName");
    const UserTheme = window.localStorage.getItem("Theme");

    const [user,setUser] = useState({
        theme : UserTheme,
    });

    return <>
        <Wrap style={{backgroundColor: ContentColor[user.theme]}}>
            <Header state={'Write'} color={HeadColor[UserTheme]}/>
            <Write/>
        </Wrap>
    </>
}

export default Note_Write;

const Wrap = styled.div`
  height: 100vh;
`
