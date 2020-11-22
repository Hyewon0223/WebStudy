import React from 'react';
import styled from 'styled-components';

const ReviewTextEdit = styled.textarea`
    position: absolute;
    width: 327px;
    height: 142px;
    left: 24px;
    top: 82px;
    
    background: #F9F9F9;
    border-radius: 10px;
    border: 0;
    resize : none;
    
    font-family: Roboto;
    font-style: normal;
`

function TextEdit(){
    return(
        <ReviewTextEdit placeholder = "솔직한 리뷰를 작성해주세요!"/>
    )
}

export default TextEdit;
