// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

(() => {
  function getLength(str: string | number): number | string {
    // return str.length; // 报错
    // console.log(typeof str.toString());
    return str.toString();
  }
  // console.log('getLength', getLength(1));
  // 断言 as <>
  function getSum(num: number): number {
    return 1;
  }
  // 数组
  // [number] => 只能有一个元素且是规定的类型
  function Array(arr: number): [number] {
    return [1];
  }
  // 只规定类型
  function Arr(arr: number): Array<number> {
    return [1, 2];
  }

  // 枚举
  enum Color {
    Red = 1,
    Green = 2,
    Blue,
  }
  let colorName: string = Color[2];
  // console.log(colorName);

  // any
  let notSure: any = 4.2222;
  // notSure.ifItExists(); // okay, ifItExists might exist at runtime
  notSure.toFixed(2); // okay, toFixed exists (but the compiler doesn't check)
  // console.log(notSure.toFixed(2));

  let list: any[] = [1, '1', false];
  list[1] = 100;
  // let prettySure: Object = 4;
  // prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

  // Void
  /**
   * 空值 没有返回值
   */
  function sum(): void {
    console.log(1); // 没有返回值
  }

  // 类型断言
  // (变量 as 类型) | <类型>变量
  // let someValue: any = 'this is a string';

  // let strLength: number = (<string>someValue).length;
  let someValue: any = 'this is a string';

  let strLength: number = (someValue as string).length;
  console.log(strLength);
  // 拥有块级作用域的变量的另一个特点是，它们不能在被声明之前读或写

  // 接口
  function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
  }
  // 会查看printLabel的调用。 printLabel有一个参数，并要求这个对象参数有一个名为label类型为string的属性
  let myObj = { size: 10, label: 'Size 10 Object' };
  printLabel(myObj);
})();
