import React from "react";
import './Board.css';
import img20190 from '../Img/2019-0.jpg';
import img20191 from '../Img/2019-1.jpg';
import img20192 from '../Img/2019-2.jpg';
import img20193 from '../Img/2019-3.jpg';
import img20200 from '../Img/2020-0.jpg';
import img20201 from '../Img/2020-1.jpg';
import img20202 from '../Img/2020-2.jpg';
import img20203 from '../Img/2020-3.jpg';
import img20204 from '../Img/2020-4.jpg';
import img20205 from '../Img/2020-5.jpg';
import img20206 from '../Img/2020-6.jpg';
import img20207 from '../Img/2020-7.jpg';
import img20208 from '../Img/2020-8.jpg';
import img20209 from '../Img/2020-9.jpg';

export function Board(){
    return<>
        <div className = "ImgBoard">
            <div>
                <p>2020</p>
                <table className="Img2020">
                    <tr>
                        <td><img src = {img20209}/></td>
                        <td><img src = {img20208}/></td>
                        <td><img src = {img20207}/></td>
                    </tr>
                    <tr>
                        <td><img src = {img20206}/></td>
                        <td><img src = {img20205}/></td>
                        <td><img src = {img20204}/></td>
                    </tr>
                    <tr>
                        <td><img src = {img20203}/></td>
                        <td><img src = {img20202}/></td>
                        <td><img src = {img20201}/></td>
                    </tr>
                    <tr>
                        <td><img src = {img20200}/></td>
                    </tr>
                </table>
            </div>
            <div>
                <p>2019</p>
                <table className="Img2019">
                    <tr>
                        <td><img src = {img20193}/></td>
                        <td><img src = {img20192}/></td>
                        <td><img src = {img20191}/></td>
                    </tr>
                    <tr>
                        <td><img src = {img20190}/></td>
                    </tr>
                </table>
            </div>
        </div>
    </>
}

export default Board;
