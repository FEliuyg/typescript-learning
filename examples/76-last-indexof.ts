type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2>; // 3
type Res2 = LastIndexOf<[0, 0, 0], 2>; // -1

type LastIndexOf<T extends any[], U> = T["length"] extends 0
  ? -1
  : T extends [...infer A, infer B]
  ? B extends U
    ? A["length"]
    : LastIndexOf<A, U>
  : -1;

export {};
