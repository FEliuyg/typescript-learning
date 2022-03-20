# keyof 使用

> 用来获取一个对象所有 key 的类型，组合成一个联合类型

## 对象类型

### 明确的 key

```typescript
type Point = { x: number; y: number };
type P = keyof Point; // 'x' | 'y'
```

### 不明确的 key

#### number

```typescript
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish; // number
```

#### string

```typescript
type Arrayish = { [n: string]: unknown };
type A = keyof Arrayish; // number | string
```

因为对象的 key 会将 number 类型的转换为 string 类型的,所以表示 n 也可以是 number 类型的

### 数组类型

number 类型

```typescript
type Arr = string[];
type K = keyof Arr; // keyof Arr

const a: K = 1;
```

但又不完全是?

```typescript
type Arr = string[];
type K = keyof Arr; // keyof Arr

type C = K extends number ? 1 : 2; // 2
```
