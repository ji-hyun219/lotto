const candidate = Array(45).fill().map((v, i) => i + 1);
const shuffle = [];



/* 공 45개를 섞는다 */
while (candidate.length > 0) {
    const random = Math.floor((Math.random() * candidate.length));   // 0 - 44
    const spliceArray = candidate.splice(random, 1);
    const value = spliceArray[0];
    shuffle.push(value);
}



/* 공을 뽑아서 정렬한다 winBall, bonus */ 
console.log(shuffle);
const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
const bonus = shuffle[6];
console.log(winBalls, bonus);



function ballColor($ball, number) {
    if (number < 10) {
        $ball.style.backgroundColor = "red";
        $ball.style.color = "white";
    }
    else if (number < 20) {
        $ball.style.backgroundColor = "orange";
    }
    else if (number < 30) {
        $ball.style.backgroundColor = "yellow";
    }
    else if (number < 40) {
        $ball.style.backgroundColor = "blue";
        $ball.style.color = "white";
    }
    else {
        $ball.style.backgroundColor = "green";
        $ball.style.color = "white";
    }
}








/* 공을 시간을 가지고 출력한다 */
//const $result = document.querySelector('#result');
//setTimeout(() => {
//    const $ball = document.createElement('div');
//    $ball.className = 'ball';
//    $ball.textContent = winBalls[0];
//    $result.appendChild($ball);
//}, 1000);

//setTimeout(() => {
//    const $ball = document.createElement('div');
//    $ball.className = 'ball';
//    $ball.textContent = winBalls[1];
//    $result.appendChild($ball);
//}, 2000);



/* 중복 제거 */
const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

function createBall(number, $target) {
    const $ball = document.createElement('div');
    $ball.className = 'ball';
    $ball.textContent = number;
    console.log(number);
    $target.appendChild($ball);

    ballColor($ball, number);
}
for (let i = 0; i < 6; i++) {       // let 꼭 써야 한다
    setTimeout(() => { createBall(winBalls[i], $result) }, (i + 1) * 1000);
}


setTimeout(() => { createBall(bonus, $bonus) }, 7000);


