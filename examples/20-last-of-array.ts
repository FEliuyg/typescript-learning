type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];
type arr3 = [];

type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1
type tail3 = Last<arr3>;

// type Last<T extends unknown[]> = T extends { length: 1 } ? T[0] : T extends [infer A, ...infer B] ? Last<B>: never;
// type Last<T extends unknown[]> = [never, ...T][T["length"]];
type Last<T extends any[]> = T extends [...unknown[], infer R] ? R : never;
