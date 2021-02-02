## [H07] Join&Login
### React를 이용한 <b>Join & Login</b> 페이지 만들기
---  

# Join&Login

상태: 완료 🙌
속성: 회원가입과 로그인 구현
작성일시: Jan 21, 2021 8:41 PM

# [H07] Join & Login - Hyewongram

---

## 코드 파일 설명

- css 파일과 이미지 파일을 제외한 js 파일 설명
1. 공통
    - API : 서버에 값을 보내고, 서버에서 값을 받아올 때 사용하는 함수들
2. LoginPage
    - LoginBox :  로그인에 필요한 input 모음
    - LoginPage : LoginBox.js + 회원가입 페이지 이동요소
3. JoinPage
    - JoinBox :  회원가입에 필요한 input 모음
    - JoinPage : JoinBox.js + 로그인 페이지 이동요소

---

## 실행 화면 및 기능

### 1. LoginPage

: 기본 화면

![Join&Login%20a9cf5519a22741c2a469434ddd1b9e48/Login.png](Join&Login%20a9cf5519a22741c2a469434ddd1b9e48/Login.png)

- 창의 크기 상관없이 가운데 정렬 유지
- 로그인 버튼을 누르면 토큰이 만들어지며 local storage에 토큰 저장
- 로그인이 되면 MainPage로 이동하며 local storage에 id값이 저장됨
- 수정할 부분
    - [ ]  로그인 박스가 화면 중앙에 오도록 수정
    - [ ]  id값 찾는 과정 수정

### 2. JoinPage

:  로그인페이지에서 [가입하기]를 누를경우 이동

![Join&Login%20a9cf5519a22741c2a469434ddd1b9e48/Join.png](Join&Login%20a9cf5519a22741c2a469434ddd1b9e48/Join.png)

- 아이디, 이메일, 비밀번호,  성과 이름 등 필요한 정보 입력
- 회원 정보가 서버에 저장(post이용)
- 수정할 부분
    - [ ]  아이디와 비밀번호가 필수 입력이라고 표시
    - [ ]  필수 입력할 부분 안했을 경우 알림창

### 3. MainPage

: 로그인이 되면 자동으로 MainPage로 이동

: 상단바 왼쪽의 홈 버튼🏠 클릭

![Join&Login%20a9cf5519a22741c2a469434ddd1b9e48/Login_MainPage.png](Join&Login%20a9cf5519a22741c2a469434ddd1b9e48/Login_MainPage.png)

### 4. EditPage

: 상단바 왼쪽의 프로필 버튼 클릭, MainPage에서 [프로필 편집] 버튼 클릭

![Join&Login%20a9cf5519a22741c2a469434ddd1b9e48/Login_EditProfile.png](Join&Login%20a9cf5519a22741c2a469434ddd1b9e48/Login_EditProfile.png)

- 제출 클릭시 정보 수정(아이디, 비밀번호 필수 입력)
- 탈퇴 클릭시 알림창이 뜨며, 탈퇴됨 - 로그인페이지로 이동
