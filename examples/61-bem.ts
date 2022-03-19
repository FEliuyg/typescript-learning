type A = BEM<"btn", ["price"], []>; // expected: btn__price
type B = BEM<"btn", ["price"], ["warning", "success"]>; // expected: 'btn__price--warning' | 'btn__price--success'
type C = BEM<"btn", [], ["small", "medium", "large"]>; // expected: 'btn--small' | 'btn--medium' | 'btn--large'

type TupleToUnion<T extends unknown[]> = T[number];

type AddE<T extends string[]> = T extends [] ? "" : `__${T[0]}`;

type AddM<T extends string[]> = T extends [] ? "" : `--${TupleToUnion<T>}`;

type BEM<
  T extends string,
  E extends string[],
  M extends string[]
> = `${T}${AddE<E>}${AddM<M>}`;

export {};
