type Flipped = FlipArguments<
  (arg0: string, arg1: number, arg2: boolean) => void
>;
// (arg0: boolean, arg1: number, arg2: string) => void

type Reverse<T extends unknown[], U extends unknown[] = []> = T extends [
  infer A,
  ...infer B
]
  ? Reverse<B, [A, ...U]>
  : U;

type FlipArguments<T extends (...args: any) => any> = T extends (
  ...args: [...infer A]
) => infer B
  ? (...args: [...Reverse<A>]) => B
  : T;

export {};
