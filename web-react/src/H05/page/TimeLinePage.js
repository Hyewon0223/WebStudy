import React, {useState, useEffect} from 'react';

import {createFeed, readFeeds} from '../API/Api'
import {Feed} from '../component/Feed';
import {Write} from '../component/Write';
import {TimeLine} from "../component/TimeLine";
import {TitleBar} from '../component/TitleBar';
import './TimeLinePage.css'



function TLPage(props){
    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        const server = async() => {
            setFeeds(await readFeeds());
            // console.log(feeds.reverse());
        }
        server();
    }, []);

    return <>
        <div className="TimeLinePage">
            <TitleBar/>
            <Write
                readFeeds = {readFeeds}
                setFeeds = {setFeeds}
                writeFunc = {createFeed}
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
