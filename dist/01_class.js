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
(function () {
    const obj1 = {
        name: 'SSSS',
        age: 11,
    };
    const obj2 = {
        name: 'SSSS',
        age: 11,
        gender: '男'
    };
    /**
     * 定義class時可以使class去實現一個interface
     */
    class Myclass {
        constructor(name) {
            this.sayHello = () => console.log(`${this.name},你好`);
            this.name = name;
        }
    }
    const p = new Myclass("Dennis");
    p.sayHello();
})();
