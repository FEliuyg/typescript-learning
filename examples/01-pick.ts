interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

export {};
