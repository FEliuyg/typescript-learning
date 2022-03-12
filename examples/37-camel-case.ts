type Result = CamelCase<"foo-bar-baz">;

type CamelCase<T extends string> = T extends `${infer A}-${infer B}`
  ? B extends `${Capitalize<B>}`
    ? `${A}-${CamelCase<B>}`
    : `${A}${CamelCase<Capitalize<B>>}`
  : T;

export {};
