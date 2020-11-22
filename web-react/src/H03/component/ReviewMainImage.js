import React from 'react';
import styled from 'styled-components';
import image from '../img/MainImage.png'

const Wrap = styled.div`
`;

const MainImage = styled.div`
    position: absolute;
    width: 375px;
    height: 219px;
    left: 0px;
    top: 52px;
    
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${image});
`;

const MainText = styled.div`
    position: absolute;
    width: 375px;
    height: 62.96px;
    left: 0px;
    top: 130.02px;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    // display: flex;
    // align-items: center;
    text-align: center;
    
    color: #FFFFFF;
    
    text-shadow: 0px 3.17333px 3.17333px rgba(0, 0, 0, 0.25);
`;

const MainLocation = styled.div`
    position: absolute;
    width: 375px;
    height: 26.01px;
    left: 0px;
    top : 242px;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    // display: flex;
    // align-items: center;
    text-align: center;
    
    color: #FFFFFF;
    
    text-shadow: 0px 3.17333px 3.17333px rgba(0, 0, 0, 0.25);
`;

function ReviewMainImage(){
    return(
        <Wrap>
            <MainImage/>
            <MainText>소융대 비빔면+삼겹살</MainText>
            <MainLocation>B-1</MainLocation>
        </Wrap>
    )
}

export default ReviewMainImage;
