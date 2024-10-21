# Typescript

### Learning

```js
let 이름:string = 'kim'; // 문자만 들어올 수 있다.
// string, number, boolean, null, underfined, bigin, [], {} 등

let 이름:string[] = ['kim', 'lee']  // array = []; 이 변수엔 string 담긴 array 만 들어올 수 있습니다.

let 이름:{name:string} = {name:'lee'}  // dict
let 이름:{name?:string} = { }  // name 속성은 옵션

let 이름:string|number = 'lee';  // string or number 도 들어올 수 있다.
let 이름:string[]|number = 'lee';

type Name = string | number  // 변수 생성
let  이름:Name = 123;

function 함수(x : number):number {  // x: number 는 input; return = ():number 는 output
    return x * 2
}

type Member = [number, boolean];  // array 에 쓸 수 있는 tuple 타입
let john:Member = [123, true]

type Member = {  // object 에 타입 지정
    name: string
    [key: string]: string  // 모든  object 속성; Key 도 string, Value 도 string
}
let john:Member = { name : 'lee'}

class User {
    name :string;
    constructor(name :string) {
        this.name = name;
    }
}
```