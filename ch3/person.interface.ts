interface IPerson1 {
  name: string
  age: number
}
let good: IPerson1 = {name: "jack", age: 32}

// let bad1: IPerson1 = {name: "jack"} // age가 없어서 오류
// let bad2: IPerson1 = {age: 32} // name이 없어서 오류
// let bad3: IPerson1 = {} // name, age가 없어서 오류
// let bad4: IPerson1 = {name: "jack", age: 32, etc: true} // etc 속성이 있어서 오류

interface IPerson2 {
  name: string // 필수 속성
  age: number // 필수 속성
  etc?: boolean // 선택 속성
}
let good1: IPerson2 = {name: "jack", age: 32}
let good2: IPerson2 = {name: "jack", age: 32, etc: true}
