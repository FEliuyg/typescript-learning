type StringToNumber = { mapFrom: string; mapTo: number };
type Res1 = MapTypes<{ iWillBeANumberOneDay: string }, StringToNumber>; // gives { iWillBeANumberOneDay: number; }

type StringToDate = { mapFrom: string; mapTo: Date };
type Res2 = MapTypes<
  { iWillBeNumberOrDate: string },
  StringToDate | StringToNumber
>; // gives { iWillBeNumberOrDate: number | Date; }

type Res3 = MapTypes<
  { iWillBeANumberOneDay: string; iWillStayTheSame: Function },
  StringToNumber
>; // // gives { iWillBeANumberOneDay: number, iWillStayTheSame: Function }

type Res4 = MapTypes<
  { name: string; date: Date },
  { mapFrom: string; mapTo: boolean } | { mapFrom: Date; mapTo: string }
>; // // gives {name: boolean; date: string;}

type MapTypes<T, R extends { mapFrom: any; mapTo: any }> = {
  [Prop in keyof T]: T[Prop] extends R["mapFrom"]
    ? Extract<R, { mapFrom: T[Prop]; mapTo: any }>["mapTo"]
    : T[Prop];
};

export {};
