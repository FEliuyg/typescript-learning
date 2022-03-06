type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`

type IsEqual<T, U> = (<G>() => G extends T ? 1 : 2) extends <G>() => G extends U
  ? 1
  : 2
  ? true
  : false;

type Includes<Value extends any[], Item> = IsEqual<Value[0], Item> extends true
  ? true
  : Value extends [Value[0], ...infer rest]
  ? Includes<rest, Item>
  : false;

type a = Includes<[1, 2, 3, 5, 6, 7], 4>;

export {};
