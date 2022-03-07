const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type a = MyReturnType<typeof fn>; // should be "1 | 2"

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: [...infer A]
) => infer B
  ? B
  : never;

export {};
