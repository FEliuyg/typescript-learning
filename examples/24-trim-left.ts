type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '

type TrimLeft<T extends string> = T extends `${' ' | '\t' | '\n'}${infer A}` ? TrimLeft<A> : T;

export {}