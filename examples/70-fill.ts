type exp = Fill<[1, 2, 3], 0>; // expected to be [0, 0, 0]

// type MinusOne<T extends number, Arr extends any[] = []> = [
//   0,
//   ...Arr
// ]["length"] extends T
//   ? Arr["length"]
//   : MinusOne<T, [...Arr, 0]>;

// type Equals<A extends number, B extends number> = A extends B
//   ? B extends A
//     ? true
//     : false
//   : false;

// type Length<A extends number, Acc extends 1[] = []> = Acc["length"] extends A
//   ? Acc
//   : Length<A, [1, ...Acc]>;

// type GreaterThan<A extends number, B extends number> = Equals<A, B> extends true
//   ? false
//   : Length<A> extends [...infer _Delta, ...Length<B>]
//   ? true
//   : false;

// type Fill<
//   T extends any[],
//   N,
//   Start extends number = 0,
//   End extends number = T["length"],
//   Result extends any[] = []
// > = T extends [infer First, ...infer Rest]
//   ? GreaterThan<Start, End> extends true
//     ? T
//     : Start extends 0
//     ? End extends 0
//       ? [...Result, First, ...Rest]
//       : Fill<Rest, N, 0, MinusOne<End>, [...Result, N]>
//     : Fill<Rest, N, MinusOne<Start>, MinusOne<End>, [...Result, First]>
//   : Result;

type Fill<
  T extends unknown[],
  N,
  Start = 0,
  End extends number = T["length"],
  R extends readonly unknown[] = [],
  Index = 0
> = T extends [infer A, ...infer B]
  ? Start extends End
    ? [A, ...Fill<B, N, Start, End, [...R, A], Index>]
    : Index extends Start
    ? [
        N,
        ...Fill<B, N, [...R, A]["length"], End, [...R, A], [...R, A]["length"]>
      ]
    : Index extends End
    ? [A, ...Fill<B, N, Start, End, [...R, A], Index>]
    : [A, ...Fill<B, N, Start, End, [...R, A], [...R, A]["length"]>]
  : [];

export {};
