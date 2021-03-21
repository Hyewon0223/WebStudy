import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

import Header from "../component/Header";
import Icon_add_file from '../img/add-file.png'
import Docs from "../component/Docs";

const HeadColor = ['#FFF4B9','#B9D1FF','#94FF9F','#D288FF','#676767'];
const ContentColor = ['#FFFBE5','#E1EBFF','#D8FFDC','#EFD4FF','#C4C4C4'];

export const Note_Home = () => {
    // window.localStorage.setItem('UserName', 'Hyewon');
    // window.localStorage.setItem('Theme', 0);

    const UserName = window.localStorage.getItem("UserName");
    const UserTheme = window.localStorage.getItem("Theme");

    const [docs, setDocs] = useState([]);

    useEffect(() => {

    }, []);

    return <>
        <Wrap style={{backgroundColor:ContentColor[UserTheme]}}>
            <Header state={'Home'} color={HeadColor[UserTheme]}/>
            <AddDocs><Link to = "/Write"><img src={Icon_add_file}/></Link></AddDocs>

        </Wrap>
    </>
}

export default Note_Home;

const Wrap = styled.div`
  height: 100vh;
`

const AddDocs = styled.div`
    img{
      width : 70px;
      height : 70px;
    }
`