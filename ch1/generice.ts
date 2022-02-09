// 제너릭 타입은 다양한 타입을 한꺼번에 취급할 수 있게 해줌
class Container<T> {
  constructor(public value: T) {}
}
let numberContainer: Container<number> = new Container<number>(1)
let stringContainer: Container<string> = new Container<string>("Hello world!")
