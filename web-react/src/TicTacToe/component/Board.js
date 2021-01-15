import React, {useState, useEffect} from 'react';
import './Board.css';

const value = [0,0,0,0,0,0,0,0,0];

export const Board = () => {

    const [user, setUser] = useState({
        player : 'X',
        count : 0,
    })

    const btnClick = (idx) => {
        if (value[idx] === 0){
            console.log("어떤 칸을 눌렀나요?")
            // user X = 1, user O = 2를 부여
            if (user.count % 2 === 0){
                setUser({
                    player : 'O',
                    count : user.count+1,
                })
                value[idx] = 1;
            }
            else{
                setUser({
                    player : 'X',
                    count : user.count+1,
                })
                value[idx] = 2;
            }
            console.log(user.count, "번째: ", user.player,"가 ", idx, "번째 칸을 눌렀습니다!ㅎㅎ");
            console.log(value);
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
                        <td><button className="block" onClick={() => {btnClick(0)}}> </button></td>
                        <td><button className="block" onClick={() => {btnClick(1)}}> </button></td>
                        <td><button className="block" onClick={() => {btnClick(2)}}> </button></td>
                    </tr>
                    <tr>
                        <td><button className="block" onClick={() => {btnClick(3)}}> </button></td>
                        <td><button className="block" onClick={() => {btnClick(4)}}> </button></td>
                        <td><button className="block" onClick={() => {btnClick(5)}}> </button></td>
                    </tr>
                    <tr>
                        <td><button className="block" onClick={() => {btnClick(6)}}> </button></td>
                        <td><button className="block" onClick={() => {btnClick(7)}}> </button></td>
                        <td><button className="block" onClick={() => {btnClick(8)}}> </button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
}

export default Board;
