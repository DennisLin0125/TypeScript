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


(function () {

    class Animal{
        name: string
        age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        bark = (str:string) => console.log(str)
    }

    class Dog extends Animal{
        run = () => console.log(`${this.name}在跑`)
    }

    class Cat extends Animal{

    }

    const dog = new Dog('小黑', 18)
    console.log(dog)
    dog.bark('旺旺')
    dog.run()

    const cat = new Cat('小花', 16)
    console.log(cat)
    cat.bark('喵喵')

})();

