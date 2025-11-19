const pwcreate = document.querySelector('.create'); // ボタン
const pwresult = document.querySelector('.result'); // input
const pwcopy  = document.querySelector('.copy'); //コピー

// ボタンをクリックしたらパスワード生成
pwcreate.addEventListener('click', () => {
   
    const pwlist =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*-_+=';
    let password = '#'; //シャープが必ず文頭に含まれる

    for (let i = 0; i < 6; i++) { // 6文字のパスワード
    const randomIndex = Math.floor(Math.random() * pwlist.length);
    password += pwlist[randomIndex]; 
}
    console.log(password); // 例: "A3B1C2"
    pwresult.value = password;
});


//コピーを押したときの動作
pwcopy.addEventListener('click', () => {
    const copyDo = pwresult.value;
    navigator.clipboard.writeText(copyDo);
    window.alert('コピーしました!');
})
