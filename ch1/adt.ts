// ADT는 추상 데이터 타입을 의미하기도 하지만 대수 타입을 의미하기도 함
// 대수 타입이란 다른 자료형의 값을 가지는 자료형을 의미
// 대수 타입에는 합집합과 교집합이 있음

type NumberOrString = number | string // 합집합 타입 예
type AnimalAndPerson = Animal & Person // 교집합 타입 예