type Butterfly = DropChar<" b u t t e r f l y ! ", " ">; // 'butterfly!'

type DropChar<
  T extends string,
  K extends string
> = T extends `${infer A}${K}${infer C}` ? `${A}${DropChar<C, K>}` : T;

export {};
