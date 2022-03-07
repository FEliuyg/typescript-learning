declare const config: Chainable;

const result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  //   .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

// expect the type of result to be:
interface Result {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}

type MyExclude<T, K> = T extends K ? never : T;

type Chainable<T extends Object = {}> = {
  option<K extends string, V>(
    key: MyExclude<K, keyof T>,
    value: V
  ): Chainable<T & { [S in K]: V }>;
  get(): T;
};

export {};
