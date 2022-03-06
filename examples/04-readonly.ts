type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type readonlyTodos = MyReadonly<Todo>;

export {};
