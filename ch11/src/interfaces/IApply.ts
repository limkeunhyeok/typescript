import { IFunctor } from ".";

export interface IApply<T> extends IFunctor<T> {
  ap<U>(b: U);
}
