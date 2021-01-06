import React, {useState} from "react";
import {DisplayWeather} from './DisplayWeather'
import './Select.css';

export function Select(props){
    const [state, setState] = useState({
        value : 'Seoul',
    })
    const getValue = e => {
        setState({
            value : e.target.value
        })
    }
    const searchClick = e => {
        console.log("search", state.value);
        alert('The country you chose...' + state.value);
        const result = props.SearchWeather(state.value);
        // const jsonData = JSON.stringify(result);
        // console.log("json",jsonData);

    }

    return <>

        <select value={state.value} onChange={getValue}>
            <option value="Seoul">서울</option>
            <option value="New York">뉴욕</option>
            <option value="Sydney">시드니</option>
            <option value="Paris">파리</option>
        </select>
        <button onClick = {searchClick}>확인</button>
    </>
}

export default Select;
