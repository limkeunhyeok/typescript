import { IValuable } from ".";

export interface ISetoid<T> extends IValuable<T> {
  equals<U>(value: U): boolean;
}