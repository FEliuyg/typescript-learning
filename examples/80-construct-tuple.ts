type result = ConstructTuple<2>; // expect to be [unknown, unkonwn]
type Res2 = ConstructTuple<999>["length"];

type ConstructTuple<
  N extends number,
  Res extends unknown[] = []
> = Res["length"] extends N ? Res : ConstructTuple<N, [...Res, unknown]>;

export {};
