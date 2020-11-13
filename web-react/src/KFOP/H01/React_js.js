import React, { Component } from 'react';

class Study extends Component {

    submit = () => {
        const welcome = document.querySelector('#welcome');
        const txt = document.querySelector('#input').value;
        console.log(txt);
        welcome.innerHTML = "Hello, " + txt + "!";
    }

    render() {
        return (
            <div>
                <h3>What's Your Name?</h3>
                <input id={"input"} placeholder="Name"/>
                <button onClick={this.submit}> OK </button>
                <div id={"welcome"}></div>
            </div>
        );
    }
}

export default Study;
    