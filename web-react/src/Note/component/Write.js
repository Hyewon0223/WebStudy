import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {useHistory} from "react-router";

import Icon_del from '../img/delete.png';
import Icon_save from '../img/save-file.png';

export const Write = (props) => {
    const history = useHistory();

    const HeadColor = ['#FFF4B9','#B9D1FF','#94FF9F','#D288FF','#676767'];
    const ContentColor = ['#FFFBE5','#E1EBFF','#D8FFDC','#EFD4FF','#C4C4C4'];

    const UserName = window.localStorage.getItem("UserName");
    const UserTheme = window.localStorage.getItem("Theme");
    const DocsIdx = parseInt(window.localStorage.getItem("idx"));
    const DocsNum = parseInt(window.localStorage.getItem("num"));

    const [user,setUser] = useState({
        theme : UserTheme,
    });

    const [docs, setDocs] = useState({
        title : '',
        content : '',
    })

    const getValue = e => {
        const {name, value} = e.target;
        setDocs({
            ...docs,
            [name]: value
        })
    };

    const SaveClick = () => {
        if (docs.title===''){
            alert('제목을 입력해주세요')
        }
        else if(docs.content===''){
            alert('내용을 입력해주세요')
        }
        else {
            window.localStorage.setItem(DocsIdx + "_Title", docs.title);
            window.localStorage.setItem(DocsIdx + "_Content", docs.content);
            window.localStorage.setItem("num", DocsNum + 1);
            window.localStorage.setItem("idx", DocsIdx + 1);
        }
    }

    const DelClick = () => {
        // window.localStorage.removeItem(DocsIdx+"_Title");
        // window.localStorage.removeItem(DocsIdx+"_Content");
        // // window.localStorage.setItem("num", DocsNum - 1);
        //
        // alert("삭제되었습니다");
        //
        // history.push('/');
    }

    return <>
            <TitleDiv style={{backgroundColor: HeadColor[user.theme]}}>
                <Title placeholder={"제목을 입력하세요"} type={"text"} name={"title"} value={docs.title} onChange={getValue}/>
                <SaveDiv><img src={Icon_save} onClick={()=>{SaveClick()}}/></SaveDiv>
                <DelDiv><img src={Icon_del} onClick={()=>{DelClick()}}/></DelDiv>
            </TitleDiv>
            <ContentDiv><Content placeholder={"내용을 입력하세요"} type={"text"} name={"content"} value={docs.content} onChange={getValue}/></ContentDiv>
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
  width : 80%;
  background-color : transparent;
  border : none;
  margin-left : 10px;
`

const SaveDiv = styled.div`
  img{
    width : 25px;
    height : 25px;
  }
  margin-left : 5px;
`

const DelDiv = styled.div`
  img{
    width : 25px;
    height : 25px;
  }  
  margin-left : 5px;
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