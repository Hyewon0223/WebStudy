import React from 'react';
import './Header.css'
import header_back from '../img/header_back.png'

function TextHeader(props){
	return(
		<div className = "Header">
			<div className = "HeaderImg"><img src = {header_back}/></div>
			<div className = "HeaderTxt">{props.name}</div>
		</div>
	)
}

export default TextHeader;