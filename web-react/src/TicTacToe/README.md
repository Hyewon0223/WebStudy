## [개인] Tic Tac Toe
### React를 이용한 <b>Tic Tac Toe</b> 미니 게임  
---   
# Tic Tac Toe

상태: 진행 중
속성: Tic Tac Toe 게임 (미니 빙고)
작성일시: Jan 14, 2021 10:26 PM

# TIC TAC TOE

- Board.js
   - 기본 보드판
   - 사용자 : O, X
- Condition.js
   - 사용자의 승리 조건 정리

---

Jan 14, 2021 TicTacToe 프로젝트 시작

- [x]  프로젝트 계획 짜기
- [x]  Board, Condition 파일 생성
- [x]  Board 파일 player부분 작성
- [ ]  버튼 중복 클릭 막기

![Tic%20Tac%20Toe%20207b84937c6d4486982178320f4958b7/TTT_0114.png](Tic%20Tac%20Toe%20207b84937c6d4486982178320f4958b7/TTT_0114.png)

210114 TicTacToe 결과

---

Jan 15, 2021

- [x]  중복 클릭 막기
- [x]  함수에 idx 값 전달해서 어떤 버튼을 누르는지 알 수 있게 하기
   - 버튼 클릭시 onClick 이벤트에 함수와 인자값을 전달하려고 했으나 처음부터 호출되면서 문제 발생

   ```jsx
   // 수정 전
   <button className="block" onClick={btnClick}/> 
       // 실행시 함수가 돌아가지 않아 정상적으로 실행할 수 있으나, idx 값 전달 불가능
   <button className="block" onClick={btnClick(0)}/>
       // 실행시 함수가 바로 작동하여 무한으로 돌아감
   ```

   ```jsx
   // 수정 후
   <button className="block" onClick={() => {btnClick(0)}}/>
       // 버튼 클릭시에만 함수 작동, idx 값 전달 가능
   ```

- [x]  각 버튼의 상태를 나타내는 배열 value[] 업데이트
   - value 배열이 일시적으로만 업데이트 되고 지속되지 않는 문제가 발생

   ```jsx
   // 수정 전
   export const Board = (props) => {
       const value = [0,0,0,0,0,0,0,0,0];
   }
       //함수 안에 선언 -> 원하는 결과가 일시적으로만 나타남
       // [0,0,0,0,1,0,0,0,0] -> [0,0,0,0,0,0,0,0,1]
   ```

   ```jsx
   // 수정 후
   const value = [0,0,0,0,0,0,0,0,0];
   export const Board = (props) => {}
       // 함수 밖에 선언 -> 원하는 결과가 지속적으로 유지되며 나타남
       // [0,0,0,0,1,0,0,0,0] -> [0,0,0,0,1,0,0,0,1]
   ```

  ![Tic%20Tac%20Toe%20207b84937c6d4486982178320f4958b7/Untitled.png](Tic%20Tac%20Toe%20207b84937c6d4486982178320f4958b7/Untitled.png)

---

Jan 16, 2021

- [x]  보드 칸에 사용자 표시하기
   - ~~각각의 사용자가 어떤 칸을 선택했는지를 저장해야할 듯,,~~
- [x]  칸을 모두 클릭했을 때 게임 종료 - 무승부
- [x]  직선을 만들었을 때(가로, 세로, 대각선) - 승리

![Tic%20Tac%20Toe%20207b84937c6d4486982178320f4958b7/Untitled%201.png](Tic%20Tac%20Toe%20207b84937c6d4486982178320f4958b7/Untitled%201.png)

---

Jan 17, 2021

- [x]  어떤 Player 차례인지 표시
- [x]  Result 표시

![Tic%20Tac%20Toe%20207b84937c6d4486982178320f4958b7/Untitled%202.png](Tic%20Tac%20Toe%20207b84937c6d4486982178320f4958b7/Untitled%202.png)

![Tic%20Tac%20Toe%20207b84937c6d4486982178320f4958b7/Untitled%203.png](Tic%20Tac%20Toe%20207b84937c6d4486982178320f4958b7/Untitled%203.png)

---

Jan 18, 2021

- [x]  리셋 버튼 만들기
- [x]  게임 결과(무승부, 승리)가 나오면 더이상 게임이 진행되지 않도록
- [x]  css 꾸미기
- 기본 화면

![Tic%20Tac%20Toe%20207b84937c6d4486982178320f4958b7/Untitled%204.png](Tic%20Tac%20Toe%20207b84937c6d4486982178320f4958b7/Untitled%204.png)

- 승리했을 때

![Tic%20Tac%20Toe%20207b84937c6d4486982178320f4958b7/Untitled%205.png](Tic%20Tac%20Toe%20207b84937c6d4486982178320f4958b7/Untitled%205.png)

![Tic%20Tac%20Toe%20207b84937c6d4486982178320f4958b7/Untitled%206.png](Tic%20Tac%20Toe%20207b84937c6d4486982178320f4958b7/Untitled%206.png)

- 무승부일 때

![Tic%20Tac%20Toe%20207b84937c6d4486982178320f4958b7/Untitled%207.png](Tic%20Tac%20Toe%20207b84937c6d4486982178320f4958b7/Untitled%207.png)

- Reset했을 경우

![Tic%20Tac%20Toe%20207b84937c6d4486982178320f4958b7/Untitled%208.png](Tic%20Tac%20Toe%20207b84937c6d4486982178320f4958b7/Untitled%208.png)

---

Jan 19, 2021

- [x]  중복 클릭 했을 때 사용자에게도 문구가 보이게 수정하기
- [x]  조건 오류 수정
- [ ]  README 작성

![Tic%20Tac%20Toe%20207b84937c6d4486982178320f4958b7/Untitled%209.png](Tic%20Tac%20Toe%20207b84937c6d4486982178320f4958b7/Untitled%209.png)

---

Jan 24, 2021

- [x]  README 작성
