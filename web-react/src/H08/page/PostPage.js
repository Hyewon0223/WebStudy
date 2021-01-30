import React, {useState, useEffect} from 'react';
import Post from "../component/Post";

export const PostPage = (props) => {
    // const getFeed = async(props) => {
    //     const feedResult = await fetch('https://react-js-sample-api.kmuwink.net/feed/'+props.id,{
    //         method: 'get',
    //         headers: {
    //             'Authorization':props.token,
    //         },
    //     });
    //     const result = await feedResult.json();
    //     console.log(result);
    //     return result;
    // }

    return <>
        <div><Post/></div>
    </>
}

export default PostPage;
