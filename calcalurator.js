const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let score = 0;

function makeQuestion() {
  return new Promise((resolve, reject) => {
    let x = parseInt(Math.random() * 100, 10);
    let y = parseInt(Math.random() * 100, 10);
    
    console.log(`덧셈문제 : ${x} + ${y} = ?`);
    
    rl.question('답을 입력하세요', (answer) => {
      if (x + y === parseInt(answer, 10)) {
        score += 10;
        resolve('맞았다');
      }
      reject('바보야')
    });
  });
}

const fs = require('fs');

makeQuestion()
  .then(() => {
    return makeQuestion();
  })
  .then(() => {
    return makeQuestion();
  })
  .then(() => {
    console.log(`당신의 점수는 ${score} 입니다.`)
    rl.close();
    fs.writeFile('./score.txt', score, (err) => {
      console.log(err);
    });
  })
  .catch((error) => {
    console.log(error);
    rl.close();
    fs.writeFile('./score.txt', score, (err) => {
      console.log(err);
    });
  })
