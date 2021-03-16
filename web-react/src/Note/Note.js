import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import Note_Home from "./Note_Home";
import Note_Write from "./Note_Write";
import Note_Settings from "./Note_Settings";

export const Note = () => {
    return <>
        <Router>
            <Route exact path='/' component={Note_Home}/>
            <Route path='/Write' component={Note_Write}/>
            <Route path='/Settings' component={Note_Settings}/>
        </Router>
    </>
}

export default Note;