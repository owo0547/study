// const hello = function () {
//     document.getElementById('hello').innerHTML = "아니야";
// }

const a = () => {
    console.log('hello');
};
a();

const b = () => 10;

const a = ['a', 'b', 'c', 'd'];

// 배열의 각 요소들을 방문한다.
a.forEach((v, i) => {
  console.log(`${i}: ${v}`);
});

// map, filter 형제
// 배열의 각 요소들을 방문하면서 새로운 배열을 리턴한다.
const b = a.map((v, i) => {
  return `${v}:${i}`;
});

console.log(b);

// 배열의 각 요소들을 방문하면서 조건에 해당하는 애들만 배열로 만들어서 리턴한다. 
const c = a.filter((v, i) => {
  if (v === 'c') {
    return true;
  }
});

console.log(c);

// some, every 자매
// some 하나라도 true 면 true (나머지 요소들 돌지 않는다.)
const d = a.some((v, i) => {
  if (v === 'b') {
    return true;
  }

  console.log('some:', v);
  return false;
});

console.log(d);

// 모든항목이 true면 끝 = 하나라도 false 면 끝
const e = a.every((v, i) => {
  if (v === 'd') {
    return false;
  }
  console.log('every:' + v);
  return true;
});

console.log(e);

console.log('1');

function xxx(cb) {
    setTimeout(() => {
      for(let i = 0; i < 10000; i++) {
        if (i === 9999) {
          cb();
          break;
        }
      }
    }, 0);
}


xxx(() => {
  xxx(() => {
    xxx(() => {
      console.log('끝났다.');
    })
  })
})

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    for(let i = 0; i < 10000; i++) {
      if (i === 9999) {
        resolve(5);
        break;
      }
    }
    reject(new Error('에러야'));
  }, 0);
});

promise
  .then((result) => {
    console.log('성공');
    return promise;
  })
  .then((result) => {
    console.log('성공');
    return promise;
  })
  .catch((error) => {
    //한번이든 걸리면 무조건 옴ㅌ
  })


console.log('2');




module.exports = hello;


