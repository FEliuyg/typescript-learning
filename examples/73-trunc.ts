type A = Trunc<12.34>; // 12

type Trunc<T extends number | string> = `${T}` extends `${infer A}.${infer B}`
  ? `${A}`
  : `${T}`;

export {};
