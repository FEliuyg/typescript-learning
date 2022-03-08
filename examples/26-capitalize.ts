type capitalized = MyCapitalize<'hello world'> // expected to be 'Hello world'


type MyCapitalize<T extends string> = T extends `${infer A}${infer B}` ? `${Uppercase<A>}${B}` : never;