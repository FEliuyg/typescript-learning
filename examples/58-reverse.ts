type a = Reverse<["a", "b"]>; // ['b', 'a']
type b = Reverse<["a", "b", "c"]>; // ['c', 'b', 'a']

type Reverse<T extends unknown[], U extends unknown[] = []> = T extends [
  infer A,
  ...infer B
]
  ? Reverse<B, [A, ...U]>
  : U;

export {};
