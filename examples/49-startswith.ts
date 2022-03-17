type a = StartsWith<"abc", "ac">; // expected to be false
type b = StartsWith<"abc", "ab">; // expected to be true
type c = StartsWith<"abc", "abcd">; // expected to be false

type StartsWith<A extends string, B extends string> = A extends `${B}${infer C}`
  ? true
  : false;

export {};
