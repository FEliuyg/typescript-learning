interface User {
  name: string;
  age: number;
  address: string;
}

type UserPartialName = PartialByKeys<User>; // { name?:string; age:number; address:string }

type IntersecToObj<T> = {
  [P in keyof T]: T[P];
};

type PartialByKeys<T, K = unknown> = IntersecToObj<
  {
    [P in keyof T as P extends K ? P : never]?: T[P];
  } & {
    [P in Exclude<keyof T, K>]: T[P];
  }
>;

export {};
