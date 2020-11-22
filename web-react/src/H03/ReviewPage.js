import React from 'react';
import styled from 'styled-components';
import ReviewTextEdit from "./ReviewTextEdit";
import AddImage from "./AddImage";
import WriteReviewButton from "./Button";
import ReviewStar from "./ReviewStar";
import Header from "./Header";
import ReviewMainImage from "./ReviewMainImage";


const Wrap = styled.div`
    background : #F9F9F9;
`

const TopDiv = styled.div`
    top: 52px;
`

const BottomDiv = styled.div`
    position: absolute;
    width: 375px;
    height: 478px;
    left: 0px;
    top: 297px;
    
    background: #FFFFFF;
`


function ReviewPage(){
    return(
        <Wrap>
            <Header/>
            <TopDiv>
                <ReviewMainImage/>
            </TopDiv>
            <BottomDiv>
                <ReviewStar/>
                <ReviewTextEdit/>
                <AddImage/>
                <WriteReviewButton name = {"리뷰 작성"}/>
            </BottomDiv>
        </Wrap>
    )
}

export default ReviewPage;
