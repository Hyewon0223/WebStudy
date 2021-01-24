export async function createToken(id,pw){
    const result = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/api-token-auth/', {
        method: 'post',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            username: id,
            password: pw,
        }),
    });
    return await result.json();
}

export async function JoinAPI(id,em,pw,ln,fn){
    const result = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/user/', {
        method: 'post',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            username: id,
            email: em,
            password: pw,
            last_name: ln,
            first_name: fn,
        }),
    });
    return await result.json();
}

export async function getUserInfo(){
    const result = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/user/',{
        method: 'get',
    });
    const data = await result.json();
    console.log(data);

    /*
    // 전체 회원 정보와 저장한 Token, key(username)과 비교해
    // id값을 찾아 get을 통해 정보 출력

    let URL = '';
    for (let i=0;i<data.length;i++){
        if (localStorage.key(0) === data[i].username){
            URL = 'http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/user/'+(i+1);
            console.log(URL);
            break;
        }
    }

    const info = await fetch(URL,{
        method: 'get',
    })

    const infoData = await info.json();
    console.log(infoData);

    setUser({
        username: infoData["username"],
        email: infoData["email"],
        last_name: infoData["last_name"],
        first_name: infoData["first_name"],
    })
     */

    /*
    // 전체 회원 정보와 저장한 Token, key(username)과 비교해 사용자 정보 출력
    // for (let i=0;i<data.length;i++){
    //     if (localStorage.key(0) === data[i].username){
    //         console.log(data[i])
    //         setUser({
    //             username: data[i]["username"],
    //             email: data[i]["email"],
    //             last_name: data[i]["last_name"],
    //             first_name: data[i]["first_name"],
    //         })
    //         break;
    //     }
    // }
    */

    // 전체 회원 정보와 저장한 Token, key(username)과 비교해 id 값을 찾음
    // 찾은 id값 이전의 id값을 가진 회원 정보를 delete했다면 내가 찾은 id값 역시 틀리므로
    // 찾은 id값을 기준으로 다시 +1씩 더해주면서 찾을 때까지 반복
    let userName = '';
    let URL_idx = 0;
    let URL = 'http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/user/';
    for (let i = 0; i < data.length; i++) {
        if (localStorage.key(0) === data[i].username) {
            userName = data[i].username;
            URL_idx = i+1;
            break;
        }
    }

    let find_state = false;
    while(!find_state) {
        console.log(URL_idx);
        let info = await fetch(URL + URL_idx, {
            method: 'get',
        })

        let infoData = await info.json();

        if (infoData["username"]===userName) {
            console.log(infoData);
            window.localStorage.setItem('id', JSON.stringify(URL_idx));

            find_state = true;
            return URL_idx;
        }
        else{
            URL_idx++;
        }
    }
    return false;
}
