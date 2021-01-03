import React from 'react';

export async function createFeed(name, body){
    const result = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/feed/',{
        method: 'post',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            content: body,
            owner: name,
        }),
    });
    window.location.reload(); //새로고침
}

export async function readFeeds(){
    const feedResult = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/feed/',{
        method: 'get',
    });
    const result = await feedResult.json();
    console.log(result.reverse());
    return result;
}
