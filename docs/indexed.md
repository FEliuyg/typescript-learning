# 索引访问类型

## 对象类型

### 单个

```typescript
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];
```

### 多个

```typescript
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age" | "name"];
```

### 全部

```typescript
type Person = { age: number; name: string; alive: boolean };
type Age = Person[keyof Person];
```

> 注意：索引不能是个值变量，必须是个类型

```typescript
const key = "age";
type Age = Person[key]; // Type 'key' cannot be used as an index type.
```

需要是

```typescript
type key = "age";
type Age = Person[key]; // Type 'key' cannot be used as an index type.
```

## 数组

### 数组值

```typescript
const myArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person = typeof myArray[number];
```

### 数组类型

```typescript
type MyArray = { name: string; age: number }[];

type Person = MyArray[number];
```

### 元组类型

```typescript
type MyTuple = [1, 2, 3];

type Person = MyTuple[number];
```
