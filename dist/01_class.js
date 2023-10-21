"use strict";
class Person {
    constructor() {
        /**
         * 直接定義的屬性是實例對象的屬性,需要通過實例對象去訪問
         */
        this.name = 'dennis';
        this.sayHello = (str) => console.log(str);
    }
}
/**
 * 使用static定義的是靜態屬性,只能透過class去訪問
 */
Person.age = 19;
const p1 = new Person();
console.log(p1);
console.log(p1.name);
console.log(Person.age);
p1.sayHello('Hello DennisLin');
