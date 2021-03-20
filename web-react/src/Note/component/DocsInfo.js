import React, {useState} from 'react';
import {Docs} from "./Docs";

export const DocsInfo = (props) => {
    const DocsNum = parseInt(window.localStorage.getItem("num"));

    return props.docs.map(docs => <Docs title={docs.title}/>)

}

export default DocsInfo;