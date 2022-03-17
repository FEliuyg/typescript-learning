type Zero = MinusOne<1>; // 0
type FiftyFour = MinusOne<55>; // 54

type MinusOne<T extends number, U extends any[] = []> = [
  ...U,
  unknown
]["length"] extends T
  ? U["length"]
  : MinusOne<T, [...U, unknown]>;

export {};
