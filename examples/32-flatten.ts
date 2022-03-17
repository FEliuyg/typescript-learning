type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]

type Flatten<T extends unknown[], Arr extends unknown[] = []> = T extends [
  infer First,
  ...infer Rest
]
  ? First extends unknown[]
    ? [...Flatten<First>, ...Flatten<Rest>]
    : [First, ...Flatten<Rest>]
  : Arr;

export {};
