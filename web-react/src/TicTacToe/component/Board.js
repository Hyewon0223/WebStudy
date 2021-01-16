import React, {useState, useEffect} from 'react';
import './Board.css';
import {Condition} from "./Condition";

const value = [0,0,0,0,0,0,0,0,0];
const choose_X = [0,0,0,0,0,0,0,0,0];
const choose_O = [0,0,0,0,0,0,0,0,0];

export const Board = (props) => {
    let result = "";
    const [user, setUser] = useState({
        player : 'X',
        count : 0,
    })

    const btnClick = (idx) => {
        if (value[idx] === 0){
            console.log("어떤 칸을 눌렀나요?");
            // user X = 1, user O = 2를 부여
            if (user.count % 2 === 0){
                setUser({
                    player : 'O',
                    count : user.count+1,
                })
                value[idx] = 1;
                choose_X[idx] = 1;
                result = Condition(user.count, choose_X);
                console.log(user.player,result);
            }
            else{
                setUser({
                    player : 'X',
                    count : user.count+1,
                })
                value[idx] = 2;
                choose_O[idx] = 1;
                result = Condition(user.count, choose_O);
                console.log(user.player, result);
            }
            // console.log(user.count, "번째: ", user.player,"가 ", idx, "번째 칸을 눌렀습니다!ㅎㅎ");
            // console.log(value);
            // console.log(choose_X, choose_O);
        }
        else{
            console.log(idx,"번째 칸은 이미 누르셨습니다ㅜ-ㅜ");
        }
        return value;
    }

    return <>
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><button className="block" onClick={() => {btnClick(0)}}>{value[0]===0? '': value[0]===1? 'X':'O'}</button></td>
                        <td><button className="block" onClick={() => {btnClick(1)}}>{value[1]===0? '': value[1]===1? 'X':'O'}</button></td>
                        <td><button className="block" onClick={() => {btnClick(2)}}>{value[2]===0? '': value[2]===1? 'X':'O'}</button></td>
                    </tr>
                    <tr>
                        <td><button className="block" onClick={() => {btnClick(3)}}>{value[3]===0? '': value[3]===1? 'X':'O'}</button></td>
                        <td><button className="block" onClick={() => {btnClick(4)}}>{value[4]===0? '': value[4]===1? 'X':'O'}</button></td>
                        <td><button className="block" onClick={() => {btnClick(5)}}>{value[5]===0? '': value[5]===1? 'X':'O'}</button></td>
                    </tr>
                    <tr>
                        <td><button className="block" onClick={() => {btnClick(6)}}>{value[6]===0? '': value[6]===1? 'X':'O'}</button></td>
                        <td><button className="block" onClick={() => {btnClick(7)}}>{value[7]===0? '': value[7]===1? 'X':'O'}</button></td>
                        <td><button className="block" onClick={() => {btnClick(8)}}>{value[8]===0? '': value[8]===1? 'X':'O'}</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
}

export default Board;
