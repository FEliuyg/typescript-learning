type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'

type Replace<
  A extends string,
  B extends string,
  C extends string
> = B extends ""
  ? A
  : A extends `${infer S1}${B}${infer S3}`
  ? `${S1}${C}${S3}`
  : A;

export {};
