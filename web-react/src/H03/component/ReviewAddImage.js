import React from 'react';
import styled from 'styled-components';
import photo1 from '../img/photo1.png';
import photo2 from '../img/photo2.png';
import food from '../img/food.png';
import xButton from '../img/xButton.png';

const Wrap = styled.div`
`;

const AddImage = styled.button`
    position: absolute;
    width: 102px;
    height: 102px;
    left: 24px;
    top: 249px;

    background: #FFFFFF;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    border-radius: 3px;
    
    #photo1{
        position: absolute;
        width: 32px;
        height: 30px;
        left: 35px;
        top: 24px;
    }
    #photo2{
        position: absolute;
        left: 47.8px;
        top:37.33px;
    }
`;

const AddText = styled.div`
    position: absolute;
    left: 25px;
    top: 60px;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    
    color: #333333;
`;

const ReviewImage = styled.span`
    position: absolute;
    width: 101px;
    height: 102px;
    top: 249px;
    
    background: url(${food});
    border-radius: 3px;
`;

const AddX = styled.div`
    position: absolute;
    width: 12px;
    height: 12px;
    left: 223px;
    top: 254px;

    background: url(${xButton});
`;

function ReviewAddImage(){
    return(
        <Wrap>
            <AddImage>
                <img id = "photo1" src = {photo1}/>
                <img id = "photo2" src = {photo2}/>
                <AddText>사진추가</AddText>
            </AddImage>

            <ReviewImage style={{left: 137}}/>
            <AddX style={{left: 221}}/>
            <ReviewImage style={{left: 250}}/>
            <AddX style={{left: 334}}/>
        </Wrap>
    )
}

export default ReviewAddImage;
