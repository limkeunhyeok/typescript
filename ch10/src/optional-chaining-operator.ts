export interface IPerson {
  name: string;
  age?: number;
}

let person: IPerson;
// console.log(person.name) // 에러 발생
console.log(person?.name); // 정상 동작 및 undefined 반환
