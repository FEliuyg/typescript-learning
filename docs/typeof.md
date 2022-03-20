# typeof 使用

## 获取变量类型

```typescript
let s = "hello";
let n: typeof s;

function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;
```

## 获取属性的类型

```typescript
const obj = {
  name: "zhangsan",
};

type Name = typeof obj["name"];
```

## 限制

typeof 只能获取变量或者属性的类型，不能获取表达式或语句的类型

```typescript
let shouldContinue: typeof msgbox("Are you sure you want to continue?"); // error: ',' expected.
```
