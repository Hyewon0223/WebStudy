import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';

class Test extends Component{
    constructor(props) {
        super(props);
        this.state = {value:'Seoul' ,temp:0, desc:'', icon:'', loading: true}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }

    handleSubmit(event) {
        alert('The country you chose...' + this.state.value);
        event.preventDefault();
    }

    componentDidMount(){
        const apiKey =  process.env.REACT_APP_OPENWEATHER_KEY;
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${apiKey}`;

        axios.get(URL).then(responseData => {
            console.log(responseData.data);
            const data = responseData.data;
            this.setState({
                temp : data.main.temp,
                desc : data.weather[0].description,
                icon : data.weather[0].icon,
                loading : false
            });
        }).catch(error => console.log(error));
    }

    //날씨정보 출력
    render(){
        const imgSrc = `http://openweathermap.com/img/w/${this.state.icon}.png`;
        if (this.state.loading){
            return <p>loading</p>;
        }
        else{
            return<>
                <div className = "App">
                    {/*<select value = {this.state.value}>*/}
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Seoul">서울</option>
                        <option value="Newyork">뉴욕</option>
                        <option value="Sydney">시드니</option>
                        <option value="Paris">파리</option>
                    </select>
                    <button onClick = {this.handleSubmit}>확인</button>
                    <img src = {imgSrc}/>
                    <p>{this.state.temp}</p>
                    <p>{this.state.desc}</p>
                </div>
            </>

        };
    }
}

export default Test;
