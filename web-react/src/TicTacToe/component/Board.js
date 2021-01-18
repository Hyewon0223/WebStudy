import React, {useState, useEffect} from 'react';
import './Board.css';
import {Condition} from "./Condition";

const value = [0,0,0,0,0,0,0,0,0];
const choose_X = [0,0,0,0,0,0,0,0,0];
const choose_O = [0,0,0,0,0,0,0,0,0];

export const Board = (props) => {
    let result = '';
    let finish = false;

    const [user, setUser] = useState({
        player : '다음은 X의 차례입니다',
        count : 0,
        gameover: false,
    })

    const btnClick = (idx) => {
        if (!user.gameover){
            if (value[idx] === 0){
                console.log("어떤 칸을 눌렀나요?");
                // user X = 1, user O = 2를 부여
                if (user.count % 2 === 0){
                    value[idx] = 1;
                    choose_X[idx] = 1;

                    result = Condition(user.count, choose_X);
                    if (result === '승리') {
                        result = `축하합니다! X가 승리했습니다!`;
                        finish = true;
                    }
                    else if (result === '무승부') {
                        result = "무승부입니다...아쉽네요...!";
                        finish = true;
                    }
                    else result = '다음은 O의 차례입니다'

                    setUser({
                        player : result,
                        count : user.count+1,
                        gameover : finish,
                    })
                }

                else{
                    value[idx] = 2;
                    choose_O[idx] = 1;

                    result = Condition(user.count, choose_O);
                    if (result === '승리') {
                        result = `축하합니다! O가 승리했습니다!`;
                        finish = true;
                    }
                    else if (result === '무승부') {
                        result = "무승부입니다...아쉽네요...!";
                        finish = true;
                    }
                    else result = '다음은 X의 차례입니다'

                    setUser({
                        player : result,
                        count : user.count+1,
                        gameover : finish,
                    })
                }
                console.log(user.count, "번째: ", user.player,"가 ", idx, "번째 칸을 눌렀습니다!");
            }
            else{
                console.log(idx,"번째 칸은 이미 누르셨습니다ㅜ-ㅜ");
            }
            return value;
        }
        else {
            alert("게임이 종료되었습니다!");
            result = '';
            finish = false;
        }
    }

    const btnReset = () => {
        alert("reset");
        console.log("reset");
        for (let i=0;i<9;i++){
            value[i] = 0;
            choose_X[i] = 0;
            choose_O[i] = 0;
        }
        setUser({
            player : '다음은 X의 차례입니다',
            count : 0,
            gameover: false,
        })
    }

    return <>
        <div id="state">{user.player}</div>
        <div>
            <table id = "board">
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
        <div id="reset" ><button id="resetbtn" onClick={btnReset}>RESET</button></div>
    </>
}

export default Board;
