interface User {
  name?: string;
  age?: number;
  address?: string;
}

type UserPartialName = RequiredByKeys<User, "name">; // { name: string; age?: number; address?: string }

type IntersecToObj<T> = {
  [P in keyof T]: T[P];
};

type RequiredByKeys<T, K = unknown> = IntersecToObj<
  {
    [P in keyof T as P extends K ? P : never]-?: T[P];
  } & {
    [P in Exclude<keyof T, K>]?: T[P];
  }
>;

export {};
