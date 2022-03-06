type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer V>
  ? V extends Promise<unknown>
    ? MyAwaited<V>
    : V
  : never;

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;

type x = MyAwaited<X>;
type y = MyAwaited<Y>;
type z = MyAwaited<Z>;

export {};
