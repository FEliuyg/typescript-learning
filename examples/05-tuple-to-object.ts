const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type a = typeof tuple;

type result = TupleToObject<typeof tuple>;

type TupleToObject<T extends readonly (string | number)[]> = {
  [P in T[number]]: P;
};

export {};
