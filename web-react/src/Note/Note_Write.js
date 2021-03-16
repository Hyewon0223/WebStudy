import React, {useState,useEffect} from 'react';
import Header from "./component/Header";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

export const Note_Write = () => {
    return <>
        <Header state={'Write'}/>
    </>
}

export default Note_Write;