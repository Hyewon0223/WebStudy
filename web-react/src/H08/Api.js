import React from 'react';

export async function createFeed(username, body){
    console.log(window.localStorage.getItem(username));
    const name = window.localStorage.getItem(username).split("\"")
    const token = "Token" + " " + name[3];
    console.log(token);

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

export async function readFeeds(username){
    const name = window.localStorage.getItem(username).split("\"")
    const token = "Token" + " " + name[3];
    console.log(token);

    const feedResult = await fetch('https://react-js-sample-api.kmuwink.net/feed/',{
        method: 'get',
        headers: {
            'Authorization':token,
        },
    });
    const result = await feedResult.json();

    return result;
}

//이런 식으로 하면 프론트 개발시 좋음
// export async function readInfo(){
//     return{
//         name : '최혜원',
//         id : "_hhyeoni",
//     }
// }
