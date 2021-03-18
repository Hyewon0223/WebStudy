import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Write = (props) => {
    const HeadColor = ['#FFF4B9','#B9D1FF','#94FF9F','#D288FF','#676767'];
    const ContentColor = ['#FFFBE5','#E1EBFF','#D8FFDC','#EFD4FF','#C4C4C4'];

    const UserName = window.localStorage.getItem("UserName");
    const UserTheme = window.localStorage.getItem("Theme");

    const [user,setUser] = useState({
        theme : UserTheme,
    });

    const [docs, setDocs] = useState({
        title : '',
        content : '',
    })

    return <>
            <TitleDiv style={{backgroundColor: HeadColor[user.theme]}}><Title placeholder={"제목을 입력하세요"}/></TitleDiv>
            <ContentDiv><Content placeholder={"내용을 입하세요"}/></ContentDiv>
    </>
}

export default Write;

const TitleDiv = styled.div`
  width : 80%;
  height : 40px;
  display : flex;
  align-items: center;
  margin-top : 20px;
  margin-left : auto;
  margin-right : auto;
`

const Title = styled.input`
  height : 30px;
  background-color : transparent;
  border : none;
  margin-left : 10px;
`

const ContentDiv = styled.div`
  background-color : white;
  width : 80%;
  height : 80%;
  margin : auto;
  display : flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.textarea`
  height : 95%;
  resize : none;
  width : 90%;
 
`