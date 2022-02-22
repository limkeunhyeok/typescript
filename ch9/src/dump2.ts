// 포인트 없는 함수를 화살표 함수로 만들면 에러가 발생
// 이를 위해선 타입 단언 사용
// dump 처럼 포인트가 없는 함수를 만드는 것이 불필요한 타입스크립트 오류를 만나지 않는 방안이됨
import * as R from "ramda";

export const dump = <T>(array: T[]): T[] => R.pipe(
  R.tap(n => console.log(n))
)(array) as T[]