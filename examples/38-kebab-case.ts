type Result = KebabCase<"FooBarBaz">;

type KebabCase<T extends string> = T extends `${infer A}${infer B}`
  ? Uncapitalize<B> extends B
    ? `${Lowercase<A>}${KebabCase<B>}`
    : `${Lowercase<A>}-${KebabCase<B>}`
  : T;

export {};
