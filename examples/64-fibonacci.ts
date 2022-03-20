type Result1 = Fibonacci<3>; // 2
type Result2 = Fibonacci<8>; // 21

type StringToNumber<T extends string> = T extends `${infer A}` ? A : never;

type Plus<
  A extends number,
  B extends number,
  A0 extends number[] = [],
  B0 extends number[] = []
> = A0["length"] extends A
  ? B0["length"] extends B
    ? [...A0, ...B0]["length"]
    : Plus<A, B, A0, [...B0, 0]>
  : Plus<A, B, [...A0, 0], B0>;

type Fibonacci<
  T extends number,
  Arr extends number[] = [1, 1]
> = Arr["length"] extends T
  ? [0, ...Arr][T]
  : Fibonacci<
      T,
      [...Arr, Plus<[0, ...Arr][Arr["length"]], [0, 0, ...Arr][Arr["length"]]>]
    >;

export {};
