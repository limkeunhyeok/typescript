// 포인트가 없는 함수
import * as R from "ramda";

export const dump = R.pipe(
  R.tap(n => console.log(n))
)