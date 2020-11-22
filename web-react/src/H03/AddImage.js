import React from 'react';
import styled from 'styled-components';
import photo1 from './img/photo1.png';
import photo2 from './img/photo2.png';
import food from './img/food.png'

const Wrap = styled.div`

`

const ReviewAddImage = styled.button`
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
        // width: 6.4px;
        // height: 6.67px;
        left: 47.8px;
        top:37.33px;

        // background: #333333;
    }
`;
const AddText = styled.div`
    position: absolute;
    // width: 102px;
    // height: 17px;
    left: 25px;
    top: 60px;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    // display: flex;
    // align-items: center;
    text-align: center;
    
    color: #333333;
`

const ReviewImage = styled.span`
    position: absolute;
    width: 101px;
    height: 102px;
    top: 249px;
    
    background: url(${food});
    border-radius: 3px;
`

const AddX = styled.div`
    position: absolute;
    width: 8px;
    height: 10px;
    top: 255px;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;
    text-align: center;
    
    color: #FFFFFF;
`

function AddImage(){
    return(
        <Wrap>
            <ReviewAddImage>
                <img id = "photo1" src = {photo1}/>
                <img id = "photo2" src = {photo2}/>
                <AddText>사진추가</AddText>
            </ReviewAddImage>

            <ReviewImage style={{left: 137}}/>
            <AddX style={{left: 223}}>x</AddX>
            <ReviewImage style={{left: 250}}/>
            <AddX style={{left: 336}}>x</AddX>
        </Wrap>
    )
}

export default AddImage;
