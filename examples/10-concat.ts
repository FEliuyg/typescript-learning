type Result = Concat<[1], [2]>; // expected to be [1, 2]

type Concat<T1 extends unknown[], T2 extends unknown[]> = [...T1, ...T2];
