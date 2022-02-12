class Person1 {
  name: string
  age?: number
}

class Person2 {
  constructor(public name: string, public age?: number) {}
}

// Person2를 장황하게 구현한 것
class Person3 {
  name: string
  age?: number
  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

interface IPerson4 {
  name: string
  age?: number
}

class Person4 implements IPerson4 {
  name: string
  age: number
}

abstract class AbstractPerson5 {
  abstract name: string
  constructor(public age?: number) {}
}
