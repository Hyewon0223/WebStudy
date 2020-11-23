import React from 'react';
import styled from 'styled-components';
import ReviewTextEdit from "./component/ReviewTextEdit";
import ReviewAddImage from "./component/ReviewAddImage";
import WriteReviewButton from "./component/ReviewButton";
import ReviewStar from "./component/ReviewStar";
import ReviewHeader from "./component/ReviewHeader";
import ReviewMainImage from "./component/ReviewMainImage";


const Wrap = styled.div`
    background : #F9F9F9;
    width: 375px;
    height: 775px;
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
            <ReviewHeader/>
            <TopDiv>
                <ReviewMainImage/>
            </TopDiv>
            <BottomDiv>
                <ReviewStar/>
                <ReviewTextEdit/>
                <ReviewAddImage/>
                <WriteReviewButton name = {"리뷰 작성"}/>
            </BottomDiv>
        </Wrap>
    )
}

export default ReviewPage;
