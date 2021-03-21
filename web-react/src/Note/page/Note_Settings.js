import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import Header from "../component/Header";

const HeadColor = ['#FFF4B9','#B9D1FF','#94FF9F','#D288FF','#676767'];
const ContentColor = ['#FFFBE5','#E1EBFF','#D8FFDC','#EFD4FF','#C4C4C4'];

export const Note_Settings = () => {
    const UserName = window.localStorage.getItem("UserName");
    const UserTheme = window.localStorage.getItem("Theme");

    const [user, setUser] = useState({
        username : UserName,
        theme : UserTheme,
    });

    const getValue = e => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
        console.log(user.username);
    };

    const select = (idx) => {
        setUser({
            ...user,
            theme : idx,
        })
    };

    const submit = () => {
        window.localStorage.setItem('UserName', user.username);
        window.localStorage.setItem('Theme', user.theme);
    }

    return <>
        <Wrap style={{backgroundColor: ContentColor[user.theme]}}>
            <Header state={'Settings'} color={HeadColor[user.theme]}/>
            <NameDiv>
                <div>이름</div>
                <input style={{backgroundColor:HeadColor[user.theme]}} type={"text"} name={"username"} value={user.username} onChange={getValue}/>
            </NameDiv>
            <SelectColor>
                <div>색상</div>
                <Color>
                    <Yellow onClick={()=>select(0)}/>
                    <Green onClick={()=>select(1)}/>
                    <Blue onClick={()=>select(2)}/>
                    <Purple onClick={()=>select(3)}/>
                    <Gray onClick={()=>select(4)}/>
                </Color>
            </SelectColor>
            <BtnDiv><button style={{backgroundColor:HeadColor[user.theme]}} onClick={()=>submit()}>저장</button></BtnDiv>
        </Wrap>
    </>
}

export default Note_Settings;

const Wrap = styled.div`
    height: 100vh;
`

const NameDiv = styled.div`
    margin-top: 30px;
    display : flex;
    justify-content: center;
    input{
      margin-left : 10px;
      border: none;
      height : 25px;
    }
`

const SelectColor = styled.div`
    margin-top: 10px;
    display : flex;
    justify-content: center;
`

const Color = styled.div`
    display : flex;
    justify-content: center;
`

const Yellow = styled.div`
    width : 30px;
    height : 30px;
    background-color : #FFF4B9;
    margin-left : 10px;
`

const Green = styled.div`
    width : 30px;
    height : 30px;
    background-color : #B9D1FF;
    margin-left : 5px;
`

const Blue = styled.div`
    width : 30px;
    height : 30px;
    background-color : #94FF9F;
    margin-left : 5px;
`

const Purple = styled.div`
    width : 30px;
    height : 30px;
    background-color : #D288FF;
    margin-left : 5px;
`
const Gray = styled.div`
    width : 30px;
    height : 30px;
    background-color : #676767;
    margin-left : 5px;
`

const BtnDiv = styled.div`
    display : flex;
    justify-content: center;
    margin-top : 20px;
    button{
        border : none;
        width : 60px;
        height : 25px;
    }
`
