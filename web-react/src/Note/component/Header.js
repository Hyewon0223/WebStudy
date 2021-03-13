import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Icon_setting from '../img/settings.png';
import Icon_file from '../img/file.png';
import Icon_back from '../img/back.png';
import Icon_add_file from '../img/add-file.png';
import Icon_checked from '../img/checked.png';
import Icon_del from '../img/delete.png';
import Icon_save from '../img/save-file.png';

export const Header = (props) => {
    const [user,setUser] = useState({
        username : 'Note',
        state : '',
    })

    useEffect(() => {
        if (props.state === 'Home') {
            setUser({
                username : 'Note',
                state: '',
            })
        }
        else {
            setUser({
                username : 'Note',
                state: <img src={Icon_back}/>,
            })
        }
    }, []);

    return <>
        <Wrap>
            <BackDiv>{user.state}</BackDiv>
            <TitleDiv>{user.username}</TitleDiv>
            <SettingDiv><img src={Icon_setting}/></SettingDiv>
        </Wrap>
    </>
}

export default Header;

const Wrap = styled.div`
  background : #FFF4B9;
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
    width: 35px;
    height: 35px;
  }
  margin-right : 15px;
`