type exp1 = Chunk<[1, 2, 3], 2>; // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4>; // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1>; // expected to be [[1], [2], [3]]

type Chunk<
  T extends any[],
  N extends number,
  Result extends any[] = []
> = T extends [infer First, ...infer Rest]
  ? Result["length"] extends N
    ? [Result, ...Chunk<Rest, N, [First]>]
    : Chunk<Rest, N, [...Result, First]>
  : Result["length"] extends 0
  ? []
  : [Result];

export {};
