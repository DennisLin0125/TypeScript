class Person {
    /**
     * 直接定義的屬性是實例對象的屬性,需要通過實例對象去訪問
     */
    name: string = 'dennis';

    /**
     * 使用static定義的是靜態屬性,只能透過class去訪問
     */
    static age: number = 19


    sayHello = (str: string) => console.log(str)
}

const p1 = new Person()

console.log(p1)
console.log(p1.name)
console.log(Person.age)

p1.sayHello('Hello DennisLin')

