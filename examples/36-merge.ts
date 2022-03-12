type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type Result = Merge<Foo, Bar>;

type Merge<T1 extends {}, T2 extends {}> = {
  [P in keyof T1 | keyof T2]: P extends keyof T2
    ? T2[P]
    : P extends keyof T1
    ? T1[P]
    : never;
};

export {};
