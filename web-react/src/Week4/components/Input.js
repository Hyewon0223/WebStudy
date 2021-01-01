import React from 'react';
import './Input.css';

function TextInput(props){
	return(
		<div>
			<textarea className = "TitleInput" placeholder = "제목"/>							<textarea className = "ContentInput" placeholder = "내용"/>
		</div>
	)
};

export default TextInput;							
								