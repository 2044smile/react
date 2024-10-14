// 연산자
// 대입 연산자 assignment operator
let a = 10;
let b = 20;

// 사칙 연산자 +, -, *, /, %, 지수 연산자(**)

a += b;
a -= b;
a *= b;
a /= b;

// 증가 연산자 ++ 감소 연산자 --
// postfix 방식: a++
// prefix 방식: ++a
let c = 1;
let d= c++;
console.log(c,d);
// 출력 결과: 2, 1

let e = 1;
let f = ++e;
console.log(e,f);
// 출력 결과: 2, 2

// 관계 연산자 (Relational operators)
// <, >, <=, >=
let g = 1;
let h = 2;

console.log(g < h);
// 출력 결과: true

// 동등 연산자 (Equality operators)
// a == b, a != b 자료형은 신경쓰지 않는다

// 일치 연산자 (Strict(엄격한) equality operators)
// a === b, a !== b 자료형이 같은지 확인

let i = 1;
let j = '1';

console.log(i == j); 
// 출력 결과: ture
console.log(i === j);
// 출력 결과: false

// 이진 논리 연산자 (Binary logical operators)
// a && b (and), a || b (or)

// 조건부 연산자 == 삼항 연산자 (Conditional operators == Ternary operator)
// 조건식 ? true 일 경우 : false 일 경우
let k = true;
let l = false;

console.log(k ? 1 : 2);
// 출력 결과: 1
console.log(l ? 1 : 2);
// 출력 결과: 2
// 1 = true, 2 = false