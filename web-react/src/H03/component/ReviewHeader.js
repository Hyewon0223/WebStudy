import React from 'react';
import styled from 'styled-components';
import header_back from '../img/header_back.png'

const Header = styled.div`
    position : relative;
    width: 375px;
    height: 52px;
    
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
    align-items: center;
    justifyContent: center;
    text-align: center;
    
    color: #333333;
`;

const HeaderImg = styled.div`
    position: absolute;
    width: 12px;
    height : 19px;
    top : 19px;
    left : 17.5px;
`

const HeaderText = styled.div`
    text-align : center;
    flex : 1;
`

function ReviewHeader(){
    return(
        <Header>
           <HeaderImg><img src = {header_back}/></HeaderImg>
           <HeaderText>리뷰남기기</HeaderText>
        </Header>
    )
}

export default ReviewHeader;
