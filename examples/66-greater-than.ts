type A = GreaterThan<2, 1>; //should be true
type B = GreaterThan<1, 1>; //should be false

type Equals<A extends number, B extends number> = A extends B
  ? B extends A
    ? true
    : false
  : false;

type Length<A extends number, Acc extends 1[] = []> = Acc["length"] extends A
  ? Acc
  : Length<A, [1, ...Acc]>;

type GreaterThan<A extends number, B extends number> = Equals<A, B> extends true
  ? false
  : Length<A> extends [...infer _Delta, ...Length<B>]
  ? true
  : false;

export {};
