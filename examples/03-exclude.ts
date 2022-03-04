type MyExclude<T, K> = T extends K ? never : T;

type T0 = MyExclude<"a" | "b" | "c", "a">;
