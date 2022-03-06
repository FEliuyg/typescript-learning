type Result = Push<[1, 2], "3">; // [1, 2, '3']

type Push<T extends unknown[], V> = [...T, V];

export {};
