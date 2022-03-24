type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []

type Include<T, U> = T extends [infer F, ...infer R]
  ? F extends U
    ? true
    : Include<R, U>
  : false;

type Without<T extends any[], U extends number | number[]> = T extends [
  infer First,
  ...infer Rest
]
  ? U extends number
    ? First extends U
      ? Without<Rest, U>
      : [First, ...Without<Rest, U>]
    : Include<U, First> extends true
    ? Without<Rest, U>
    : [First, ...Without<Rest, U>]
  : [];
export {};
