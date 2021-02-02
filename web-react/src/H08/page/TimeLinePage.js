import React, {useState, useEffect} from 'react';

import {Write} from '../component/TimeLinePage/Write';
import {TimeLine} from "../component/TimeLinePage/TimeLine";
import {TitleBar} from '../../H05/component/TitleBar';
import {readFeeds, createFeed} from "../Api";

function TimeLinePage(props){
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

export default TimeLinePage;
