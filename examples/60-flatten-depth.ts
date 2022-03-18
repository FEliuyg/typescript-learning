type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>; // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
type c = FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>;

type MinusOne<T extends number, U extends any[] = []> = [
  ...U,
  unknown
]["length"] extends T
  ? U["length"]
  : MinusOne<T, [...U, unknown]>;

// type FlattenDepth<T extends unknown[], D extends number = 1,> = T extends [
//   infer A,
//   ...infer B
// ]
//   ? A extends unknown[]
//     ? D extends 0
//       ? [A, ...FlattenDepth<B, D>]
//       : [...FlattenDepth<A, MinusOne<D>>, ...FlattenDepth<B, D>]
//     : [A, ...FlattenDepth<B, D>]
//   : T;

type FlattenDepth<
  T extends any[],
  C extends number = 1,
  U extends any[] = []
> = T extends [infer F, ...infer R]
  ? F extends any[]
    ? U["length"] extends C
      ? [F, ...FlattenDepth<R, C, U>]
      : [...FlattenDepth<F, C, [0, ...U]>, ...FlattenDepth<R, C, U>]
    : [F, ...FlattenDepth<R, C, U>]
  : T;

export {};
