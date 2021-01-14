import React, {useState, useEffect} from 'react';
import './Board.css';

export const Board = () => {
    const [user, setUser] = useState({
        player : 'X',
        count : 0,
        value : [0,0,0,0,0,0,0,0,0],
    })

    const btnClick = (idx) => {
        // console.log(idx,user.value[idx]);
        // if (user.value[props] === 0){
            if (user.count % 2 === 0){
                setUser({
                    player : 'O',
                    count : user.count+1,
                })
            }
            else{
                setUser({
                    player : 'X',
                    count : user.count+1,
                })
            }
            console.log(user.player, user.count);
        // }
        // else{
        //     console.log("이미 누르셨습니다ㅜ-ㅜ");
        // }
    }

    return <>
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><button className="block" onClick={btnClick}> </button></td>
                        <td><button className="block" onClick={btnClick}> </button></td>
                        <td><button className="block" onClick={btnClick}> </button></td>
                    </tr>
                    <tr>
                        <td><button className="block" onClick={btnClick}> </button></td>
                        <td><button className="block" onClick={btnClick}> </button></td>
                        <td><button className="block" onClick={btnClick}> </button></td>
                    </tr>
                    <tr>
                        <td><button className="block" onClick={btnClick}> </button></td>
                        <td><button className="block" onClick={btnClick}> </button></td>
                        <td><button className="block" onClick={btnClick}> </button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
}

export default Board;
