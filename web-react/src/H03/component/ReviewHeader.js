import React from 'react';
import styled from 'styled-components';
import header_back from '../img/header_back.png'

const Header = styled.div`
    position: absolute;
    width: 375px;
    height: 52px;
    left: 0px;
    top: 0px;
    
    background: #FFFFFF;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
    border-radius: 0px;
    border : 0;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    
    color: #333333;
`;

const HeaderText = styled.div`
    flex : 1;
`

function ReviewHeader(){
    return(
        <Header>
           <img src = {header_back}/>
            <HeaderText>리뷰남기기</HeaderText>
        </Header>
    )
}

export default ReviewHeader;
