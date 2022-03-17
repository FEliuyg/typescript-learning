type a = TupleToNestedObject<["a"], string>; // {a: string}
type b = TupleToNestedObject<["a", "b"], number>; // {a: {b: number}}
type c = TupleToNestedObject<[], boolean>; // boolean. if the tuple is empty, just return the U type

type TupleToNestedObject<T extends unknown[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? First extends string
    ? {
        [K in First]: TupleToNestedObject<Rest, U>;
      }
    : never
  : U;

export {};
