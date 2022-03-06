type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'

type If<P extends boolean, T1, T2> = P extends true ? T1 : T2;
