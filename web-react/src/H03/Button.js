import React from 'react';
import styled from 'styled-components';

const ReviewButton = styled.button`
    position: absolute;
    width: 326px;
    height: 43px;
    left: 25px;
    top: 381px;
    
    background: linear-gradient(94.03deg, #82C3FF 0%, #C464FF 100%);
    box-shadow: 0px 1px 14px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border : 0;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    
    color: #FFFFFF;
    
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
`;

function WriteReviewButton(props){
    return(
        <ReviewButton>리뷰작성</ReviewButton>
    )
}

export default WriteReviewButton;
