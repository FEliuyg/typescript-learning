type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number

type AppendArgument<F extends Function, T> = F extends (
  ...args: infer A
) => infer B
  ? (...args: [...A, T]) => B
  : never;

export {};
