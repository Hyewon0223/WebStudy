import React from 'react';

export async function createFeed(body){
    const token = window.localStorage.getItem('Token');

    const result = await fetch('https://react-js-sample-api.kmuwink.net/feed/',{
        method: 'post',
        headers: {
            'Authorization':token,
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            content: body,
        }),
    });
}

export async function readFeeds(){
    const token = window.localStorage.getItem('Token');

    const feedResult = await fetch('https://react-js-sample-api.kmuwink.net/feed/',{
        method: 'get',
        headers: {
            'Authorization':token,
        },
    });
    const result = await feedResult.json();

    return result;
}

export async function readComments(id){
    console.log(id);
    const token = window.localStorage.getItem('Token');

    const feedResult = await fetch('https://react-js-sample-api.kmuwink.net/feed/'+id+'/comment',{
        method: 'get',
        headers: {
            'Authorization':token,
        },
    });
    const result = await feedResult.json();
    console.log(result);
    return result;
}

export async function createComment(id, content){
    const token = window.localStorage.getItem('Token');

    const result = await fetch('https://react-js-sample-api.kmuwink.net/feed/'+id+'/comment/',{
        method: 'post',
        headers: {
            'Authorization':token,
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            content: content,
        }),
    });
}
