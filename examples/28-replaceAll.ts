type replaced = ReplaceAll<"t y p e s", " ", "">; // expected to be 'types'

type ReplaceAll<
  A extends string,
  B extends string,
  C extends string
> = B extends ""
  ? A
  : A extends `${infer S1}${B}${infer S2}`
  ? `${S1}${C}${ReplaceAll<S2, B, C>}`
  : A;

export {};
