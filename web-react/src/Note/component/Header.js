import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

import Icon_setting from '../img/settings.png';
import Icon_file from '../img/file.png';
import Icon_back from '../img/back.png';
import Icon_checked from '../img/checked.png';


const HeadColor = ['#FFF4B9','#B9D1FF','#94FF9F','#D288FF','#676767'];
const ContentColor = ['#FFFBE5','#E1EBFF','#D8FFDC','#EFD4FF','#C4C4C4'];

export const Header = (props) => {
    const UserName = window.localStorage.getItem("UserName");
    const UserTheme = window.localStorage.getItem("Theme");

    const [user,setUser] = useState({
        username : UserName+'\'s Note',
        leftIcon : <Transparent/>,
        rightIcon : <Transparent/>,
        color : props.color,
    })

    useEffect(() => {
        // Set Icons
        if (props.state === 'Home') {
            setUser({
                ...user,
                leftIcon: <Transparent/>,
                rightIcon: <Link to = "/Settings"><img src={Icon_setting}/></Link>,
            })
        }

        else if(props.state === 'Write') {
            setUser({
                ...user,
                leftIcon: <Link to = "/"><img src={Icon_back}/></Link>,
                rightIcon: <Link to = "/Settings"><img src={Icon_setting}/></Link>,
            })
        }

        else if(props.state === 'Settings') {
            setUser({
                ...user,
                leftIcon: <Link to = "/"><img src={Icon_back}/></Link>,
                rightIcon: <Transparent/>,

            })
        }
    }, []);

    return <>
        <Wrap style={{backgroundColor: props.color}}>
            <BackDiv>{user.leftIcon}</BackDiv>
            <TitleDiv>{user.username}</TitleDiv>
            <SettingDiv>{user.rightIcon}</SettingDiv>
        </Wrap>
    </>
}

export default Header;

const Wrap = styled.div`
  //background : #FFF4B9;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BackDiv = styled.div`
    margin-left : 15px;
    img {
      width: 30px;
      height: 30px;
    }
`

const TitleDiv = styled.div`
    
`

const SettingDiv = styled.div`
  img{
    width: 30px;
    height: 30px;
  }
  margin-right : 15px;
`

const Transparent = styled.div`
  width : 30px;
  height : 30px;
  background-color : transparent;
`