type Result = Shift<[3, 2, 1]>; // [2, 1]

type Shift<T extends unknown[]> = T extends [infer A, ...infer B] ? B : never;

export {};
