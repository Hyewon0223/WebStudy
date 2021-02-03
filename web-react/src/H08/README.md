# Comment

상태: 완료 🙌
작성일시: 2021년 1월 28일 오후 8:57

# [H08] Comment - Hyewongram

- React를 이용해 게시글 및 댓글 올리기

---

# 코드 파일 설명

- css 파일과 이미지 파일을 제외한 js 파일 설명
1. 공통
    - API : 서버에 값을 보내고, 서버에서 값을 받아올 때 사용하는 함수들
2. TimeLinePage
    - Comment :  CommentList에서 작성자, 댓글 정보를 받아와 화면에 출력하는 컴포넌트
    - CommentList : Comment 파일에 작성자와 댓글 정보를 props로 전달,
    - CommentWrite : 댓글을 쓸 수 있는 컴포넌트
    - Post : 해당 게시글을 화면에 출력하는 컴포넌트
3. PostPage
    - Feed : TimeLine에서 작성자, 글 내용 정보를 받아와 화면에 출력하는 컴포넌트
    - TimeLine : Feed파일에 작성자와 글 내용을 props로 전달
    - Write : 사용자가 직접 작성하는 컴포넌트, 서버에 사용자가 입력한 정보를 보냄

---

# 실행 화면 및 기능

## 1. TimeLinePage

: 기본 화면

![Comment%20fd315b379be94138a7debaf4b4873ec8/KakaoTalk_20210202_203258863.png](Comment%20fd315b379be94138a7debaf4b4873ec8/KakaoTalk_20210202_203258863.png)

![Comment%20fd315b379be94138a7debaf4b4873ec8/TimeLinePage-post.png](Comment%20fd315b379be94138a7debaf4b4873ec8/TimeLinePage-post.png)

[POST] '내용'이라는 게시글 작성

![Comment%20fd315b379be94138a7debaf4b4873ec8/TimeLinePage-Edit.png](Comment%20fd315b379be94138a7debaf4b4873ec8/TimeLinePage-Edit.png)

[EDIT] '내용'에서 '수정'으로 게시글 수정

![Comment%20fd315b379be94138a7debaf4b4873ec8/TimeLinePage-Del.png](Comment%20fd315b379be94138a7debaf4b4873ec8/TimeLinePage-Del.png)

[DELETE] 삭제 전

![Comment%20fd315b379be94138a7debaf4b4873ec8/TimeLinePage-Del2.png](Comment%20fd315b379be94138a7debaf4b4873ec8/TimeLinePage-Del2.png)

[DELETE] 삭제 후

- 창의 크기 상관없이 가운데 정렬 유지
- 게시글 등록, 수정, 삭제 기능(post, put, delete 이용)
- 수정할 부분
    - [ ]  게시글 수정시 한글자씩 쳐지는 문제 발생 - <EditDisplay>에서 Edit와 Post모드를 번갈아 사용할 때 무슨 모드인지 확인할 때 생김

### 2. PostPage

:  게시글을 누를 경우 댓글과 게시글이 함께 보이는 PostPage로 이동

![Comment%20fd315b379be94138a7debaf4b4873ec8/PostPage-.png](Comment%20fd315b379be94138a7debaf4b4873ec8/PostPage-.png)

![Comment%20fd315b379be94138a7debaf4b4873ec8/PostPage-post.png](Comment%20fd315b379be94138a7debaf4b4873ec8/PostPage-post.png)

[POST] '댓글!'이라는 댓글 작성

![Comment%20fd315b379be94138a7debaf4b4873ec8/PostPage-Edit1.png](Comment%20fd315b379be94138a7debaf4b4873ec8/PostPage-Edit1.png)

[EDIT] '댓글!'에서 '수정!'으로 댓글 수정

![Comment%20fd315b379be94138a7debaf4b4873ec8/PostPage-Del.png](Comment%20fd315b379be94138a7debaf4b4873ec8/PostPage-Del.png)

[DELETE] 두번째 댓글인 '내용2' 삭제 전

![Comment%20fd315b379be94138a7debaf4b4873ec8/PostPage-Del2.png](Comment%20fd315b379be94138a7debaf4b4873ec8/PostPage-Del2.png)

[DELETE] 두번째 댓글인 '내용2' 삭제 후

- 창의 크기 상관없이 가운데 정렬 유지
- 댓글 등록, 수정, 삭제 기능(post, put, delete 이용)
- 수정할 부분
    - [ ]  댓글 수정시 한글자씩 쳐지는 문제 발생 - <EditDisplay>에서 Edit와 Post모드를 번갈아 사용할 때 무슨 모드인지 확인할 때 생김
