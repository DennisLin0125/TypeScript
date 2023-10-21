"use strict";
// class Person {
//     /**
//      * 直接定義的屬性是實例對象的屬性,需要通過實例對象去訪問
//      */
//     name: string = 'dennis';
//     /**
//      * 使用static定義的是靜態屬性,只能透過class去訪問
//      */
//     static age: number = 19
//     sayHello = (str: string) => console.log(str)
// }
// const p1 = new Person()
// console.log(p1)
// console.log(p1.name)
// console.log(Person.age)
// p1.sayHello('Hello DennisLin')
// class Dog {
//     name: string
//     age: number
//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }
//     bark = () => console.log('旺旺旺旺')
// }
// const dog1 = new Dog('小黑', 18)
// const dog2 = new Dog('小白', 20)
// console.log(dog1)
// console.log(dog2)
// (function () {
//     /**
//      * abstract 開頭是抽象類
//      * 代表此類只能被繼承,不能被宣告成為實例對象
//      * 
//      * 抽象類中可以貼家抽象方法
//      */
//     abstract class Animal{
//         name: string
//         age: number
//         constructor(name: string, age: number) {
//             this.name = name
//             this.age = age
//         }
//         /**
//          * 抽象方法
//          * 抽象方法只能在抽象類中
//          * 沒有方法體 子類必須重寫
//          */
//         abstract bark():void
//     }
//     class Dog extends Animal{
//         // 子類必須重寫
//         bark = () => console.log(`旺旺`)
//         run = () => console.log(`${this.name}在跑`)
//     }
//     class Cat extends Animal{
//         // 子類必須重寫
//         bark = () => console.log(`喵喵`)
//     }
//     const dog = new Dog('小黑', 18)
//     console.log(dog)
//     dog.bark()
//     dog.run()
//     const cat = new Cat('小花', 16)
//     console.log(cat)
//     cat.bark()
// })();
// (function () {
//     // 描述一個物件
//     type MyType = {
//         name: string,
//         age: number,
//     };
//     const obj1: MyType = {
//         name: 'SSSS',
//         age: 11,
//     }
//     /**
//      * 定義一個介面
//      * 用來定義一個類該有哪些屬性和方法
//      * 同時也可以當類型去使用
//      */
//     interface MyInterface {
//         name: string,
//         age: number,
//     }
//     interface MyInterface {
//         gender: string,
//     }
//     const obj2: MyInterface = {
//         name: 'SSSS',
//         age: 11,
//         gender: '男'
//     }
//     // *****************************************
//     /**
//      * interface 可以在定義類時去限制類的結構
//      * interface 內部的屬性不能有實際的值
//      * interface 內部方法均為抽象方法
//      */
//     interface myDemo {
//         name: string
//         sayHello(): void
//     }
//     /**
//      * 定義class時可以使class去實現一個interface
//      */
//     class Myclass implements myDemo {
//         name: string;
//         constructor(name: string) {
//             this.name = name
//         }
//         sayHello = () => console.log(`${this.name},你好`)
//     }
//     const p = new Myclass("Dennis")
//     p.sayHello()
// })();
// (function () {
//     class Person {
//         private _name: string
//         private _age: number
//         constructor(name: string, age: number) {
//             this._name = name
//             this._age = age
//         }
//         get name() {
//             return this._name
//         }
//         set name(value: string) {
//             this._name = value
//         }
//         get age() {
//             return this._age
//         }
//         set age(value: number) {
//             if (value < 0) {
//                 alert('數據不合理')
//             } else {
//                 this._age = value
//             }
//         }
//     }
//     const p = new Person('DennisLin', 18)
//     p.age = 100
//     p.name = '孫悟空'
//     console.log(p)
//     console.log(p.name)
//     console.log(p.age)
// })();
// 定義泛型1
function fn(a) {
    return a;
}
// 可以直接調用具有泛型的函數
let result = fn(10); // 不指定泛型 ,TS會自行推斷
let result2 = fn('Hello world'); //指定泛型
// 定義泛型2
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, 'Hi 你好');
function foo(a) {
    return a.length;
}
console.log(foo('123'));
//==================================
class Demo {
    constructor(name) {
        this.name = name;
    }
}
const p = new Demo('dennis');
