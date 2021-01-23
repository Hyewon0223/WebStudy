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



