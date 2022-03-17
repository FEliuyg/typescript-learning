type a = EndsWith<"abc", "bc">; // expected to be true
type b = EndsWith<"abc", "abc">; // expected to be true
type c = EndsWith<"abc", "d">; // expected to be false

type EndsWith<A extends string, B extends string> = A extends `${infer C}${B}`
  ? true
  : false;

export {};
