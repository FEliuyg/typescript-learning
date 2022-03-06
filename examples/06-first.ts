// type First<T extends any[]> = T extends never[] ? never : T[0];
// type First<T extends any[]> = T extends [] ? never : T[0]; // [] 为一项都没有的元组
type First<T extends any[]> = T extends [infer R, ...infer Rest] ? R : never;

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
