type Foo = {
  [key: string]: any;
  foo(): void;
};

type A = RemoveIndexSignature<Foo>; // expected { foo(): void }

type RemoveIndexSignature<T> = {
  [P in keyof T as string extends P
    ? never
    : number extends P
    ? never
    : P]: T[P];
};

type FilteredKeys<k> = string extends k ? never : number extends k ? never : k;

type B = FilteredKeys<keyof Foo>;

type RemoveIndexSignature2<T> = {
  [P in keyof T as FilteredKeys<P>]: T[P];
};

export {};
