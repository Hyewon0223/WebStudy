import React, {useState, useEffect} from 'react';
import {Feed} from '../component/Feed';
import {Write} from '../component/Write';
import {TimeLine} from "../component/TimeLine";
import {TitleBar} from '../component/TitleBar';
import './TimeLinePage.css'

async function createFeed(name, body){

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
    console.log(await result.json());
}

async function readFeeds(){
    const feedResult = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/feed/',{
        method: 'get',
    });
    return await feedResult.json();
}

function TLPage(props){
    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        const server = async() => {
            setFeeds(await readFeeds());
        }
        server();
    }, []);

    return <>
        <div className="TimeLinePage">
            <TitleBar/>
            <Write
                readFeeds = {readFeeds}
                setFeeds = {setFeeds}
                writerFunc = {createFeed()}
            />
            <div>
                <TimeLine
                    feeds = {feeds}
                />
            </div>
        </div>
    </>;
}

export default TLPage;
