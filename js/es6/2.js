// Destructuring; 구조를 분해하다.
let person = {
    name:"cslee",
    age:20
}

// let name = person.name
// let age = person['age']

// 줄여서
let {name, age} = person
console.log(name, age)

// 배열
let arr = [1,2,3,4]
let [a,b,...rest] = arr // 1 2
console.log(a, b, rest)
