import React, {useEffect} from "react";
import {Feed} from './Feed';

export const TimeLine = (props) => {
    return props.feeds.map(feed => <Feed id={feed.id} name={feed.owner} body={feed.content}/>)
}

