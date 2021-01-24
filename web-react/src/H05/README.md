## [H05] TimeLinePage
### React를 이용한 <b>Main,TimeLine,MyPage</b> 페이지 만들기
---   
# Time Line

상태: 완료 🙌
속성: 타임 라인 구현 - Hyewongram
작성일시: Jan 14, 2021 10:49 PM

---

## 코드 파일 설명

- css 파일과 이미지 파일을 제외한 js 파일 설명
1. 공통
   - TitleBar : 상단바, 페이지 이동, 검색 기능, 로고 등
2. MainPage
   - MyInfo : 프로필 사진, 사용자의 기본 정보(이름, 사용자 이름 등)를 나타내는 컴포넌트
   - Board :  사용자의 사진 정보를 나타내는 컴포넌트
3. TimeLinePage
   - Feed : 서버에서 정보를 받아와 화면에 출력하는 컴포넌트
   - Write : 사용자가 직접 작성하는 컴포넌트, 서버에 사용자가 입력한 정보를 보냄
   - TimeLine : Feed파일에 props 전달
   - API/Api : 서버에 값을 보내고, 서버에서 값을 받아올 때 사용하는 함수들
4. MyPage
   - EditProfile : 사용자의 정보를 입력하는 컴포넌트

---

## 실행 화면 및 기능

### 1. MainPage

: 상단바 왼쪽의 홈 버튼🏠 클릭

![Time%20Line%20c75a98fb431f4f4787af218f6b3284e8/MainPage.png](Time%20Line%20c75a98fb431f4f4787af218f6b3284e8/MainPage.png)

- 창의 크기 상관없이 가운데 정렬 유지
- 수정할 부분
   - [ ]  프로필과 사진 부분을 table로 구현하였는데 사진을 추가 했을 때 더 편리하게 수정 필요

### 2. TimeLinePage

상단바 왼쪽의 보내기 버튼✉ 클릭

![Time%20Line%20c75a98fb431f4f4787af218f6b3284e8/TimeLinePage.png](Time%20Line%20c75a98fb431f4f4787af218f6b3284e8/TimeLinePage.png)

- 피드는 최신순 정렬
- 창의 크기 상관없이 가운데 정렬 유지

### 3. MyPage

상단바 왼쪽의 프로필 버튼 클릭, MainPage에서 [프로필 편집] 버튼 클릭

![Time%20Line%20c75a98fb431f4f4787af218f6b3284e8/MyPage.png](Time%20Line%20c75a98fb431f4f4787af218f6b3284e8/MyPage.png)

- 창의 크기 상관없이 가운데 정렬 유지
- 이름과 사용자 이름은 default로 저장되어 있음 (변경 가능)
- 사용자 이름 작성시 사진 옆의 이름이 함께 변경됨
- 제출을 눌러도 값이 초기화 되지 않음
- 서버 연결이 되어 있지 않기 때문에 페이지 이동시에는 저장 되지 않음
- 대신, 사용자가 입력한 정보를 콘솔창에 표시함
