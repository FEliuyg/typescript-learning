type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'

// type Trim<T extends string> = T extends `${' ' | '\t' | '\n'}${infer A}` ? Trim<A> : T extends `${infer B}${' ' | '\t' | '\n'}` ? Trim<B> : T;
type space = ' ' | '\n' | '\t';
type Trim<S extends string> = S extends `${space}${infer R}` | `${infer R}${space}`? Trim<R> : S;

export {}