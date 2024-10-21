// 삼항 연산자
let person = {name:'cslee',age:20}
// let person = null  // False

if(person){
    console.log(person.name)
}else{
    console.log("there is no person")
}

console.log(person?person.name:"there is no person")