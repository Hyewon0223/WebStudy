import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';

class Test extends Component{
    constructor(props) {
        super(props);
        this.state = {temp:0, desc:'', icon:'', loading: true}
    }

    componentDidMount(){
        const cityName = 'Seoul';
        const apiKey =  process.env.REACT_APP_OPENWEATHER_KEY;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        axios.get(url).then(responseData => {
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
                    <img src = {imgSrc}/>
                    <p>{this.state.temp}</p>
                    <p>{this.state.desc}</p>
                </div>
            </>

        };
    }
}

export default Test;
