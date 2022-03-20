type A = AllCombinations<"ABCD">;

type AllCombinations<
  S extends string,
  PRE extends string = ""
> = S extends `${infer L}${infer REST}`
  ?
      | `${L}${AllCombinations<`${REST}${PRE}`>}`
      | AllCombinations<REST, `${PRE}${L}`>
  : "";
export {};
