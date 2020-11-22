import React from 'react';
import styled from 'styled-components';
import fullstar from './img/fullstar.png';
import emptystar from './img/emptystar.png';

const Wrap = styled.div`

`

const Star = styled.span`
    position: absolute;
    width: 32px;
    height: 32px;
    top: 30px;
    
    background: url(${fullstar});
`
const EmptyStar = styled.span`
    position: absolute;
    width: 32px;
    height: 32px;
    left: 261px;
    top: 30px;
    
    background: url(${emptystar});
`

function ReviewStar(){
    return(
        <Wrap>
            <Star style={{left:82}}/>
            <Star style={{left:126.8}}/>
            <Star style={{left:171.6}}/>
            <Star style={{left:216.4}}/>
            <EmptyStar/>
        </Wrap>
    )
}

export default ReviewStar;
