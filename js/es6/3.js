// spread ...
let person = {name:'cslee',age:20}
let person2 = {...person, address:'gangnam', name:'Tim'}  // 실제로 객체를 하나 더 생성시키는 것
let person3 = person  // 객체의 `주소값만 복사` (즉 객체는 하나이고 그 객체를 참조하는 변수가 2개)
console.log(person3, person2, person) // 복사
console.log(person==person2)  // 실제로 객체를 하나 더 생성시키는 것이기에 False

let a = [1,2]
let b = [...a, 3]
console.log(a, b)
console.log(a==b)  // False

let c = [...a,...b]
console.log(c)