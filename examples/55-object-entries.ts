interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}
type modelEntries = ObjectEntries<Model>; // ['name', string] | ['age', number] | ['locations', string[] | null];

type ObjectEntries<
  T extends object,
  K extends keyof T = keyof T
> = K extends keyof T ? [K, Required<T>[K]] : never;

export {};
