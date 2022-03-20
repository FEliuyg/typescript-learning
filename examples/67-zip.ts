type exp = Zip<[1, 2], [true, false]>;

type Zip<
  Z0 extends unknown[],
  Z1 extends unknown[],
  Arr extends [unknown, unknown][] = []
> = Z0 extends [infer A, ...infer B]
  ? Z1 extends [infer C, ...infer D]
    ? Zip<B, D, [...Arr, [A, C]]>
    : Arr
  : Arr;

export {};
