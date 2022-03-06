interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todo: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

// todo.title = "Hello"; // Error: cannot reassign a readonly property
// todo.description = "barFoo"; // Error: cannot reassign a readonly property
todo.completed = true; // OK

type MyExclude<T, K> = T extends K ? never : T;

type MyReadonly2<T, K extends keyof T> = {
  [P in MyExclude<keyof T, K>]: T[P];
} & {
  readonly [P in K]: T[P];
};

//   type Diff<A, B> = A extends B ? never : A

// type MyReadonly2<T, K extends keyof T = keyof T> =
//   { readonly [S in K]: T[S] }
//   & { [S in Diff<keyof T, K>]: T[S] }

export {};
