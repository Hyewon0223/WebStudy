import React, { Component } from 'react';
import './Week4.css'
import Btn from './components/Btn';
import Input from './components/Input';
import Header from './components/Header';
import Main from './components/Main';
import MainImage from './img/MainImage.png';

class Week4 extends Component {
  render() {
    return (
		<div className = "Week4">
			<div id ="HeaderSection">
				<Header name = "댓글 쓰기"/>
			</div>

			<div id = "ImageSection">
				<Main/>
			</div>

			<div id = "TextSection">
				<Input/>
				<Btn name="댓글 작성"/>
			</div>
		</div>
    );
  }
}

export default Week4;