type Len = Length<"abc">;

type Length<
  T extends string,
  Arr extends string[] = []
> = T extends `${infer First}${infer Rest}`
  ? Length<Rest, [...Arr, First]>
  : Arr["length"];

export {};
