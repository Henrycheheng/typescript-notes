## 01 数据类型

- Boolean
- Number
- string
- null
- undefined
- symbol
- BigInt
- Array: 
  - [number] // 只有一个元素且类型学士字符串
  处理较大的数字

- void(空值)
  - 函数没有返回值 返回值是 undefined/ null
- never(没有值)

```tsx
  function str() :never {
    throw new Error('')
  }
```

- any: 任意类型 赋值后会移除变量的类型声明
- unknown: 未知类型 赋值后不会覆盖之前的类型

## 02 类型推断

> - 如果定义类型的时候,没有赋值,不管后续有没有赋值,都会当成`any`

## 03 联合类型 |

- 使用 `|` 分隔
  > 允许 A | B 类型但是其他类型不行

```tsx
  let myFavoriteVumber : string | number {
    myFavoriteVumber = 'six';
    myFavoriteVumber = 6
  }
```

## 03 访问联合类型的属性和方法

- 不能确定一个联合类型的变量的时候,只能访问联合类型的公共属性和方法

```tsx
  function getLength(str: string | number): number | string {
    // return str.length; // 报错
    // console.log(typeof str.toString());
    return str.toString();
  }
  console.log('getLength', getLength(1));
```

## 04 类型断言

- as
- <string> 尖括号

```tsx
  (()=>{
    function getSum(num:number):number {
      return '1'
    }
  })()
```

## 对象的类型 接口

行为的抽象,而具体如何行动由 class 实现
