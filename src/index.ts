import { hi } from "./m1"

function sum(a: number, b: number): number {
    return a + b
}

const obj = { name: '孫悟空', age: 33 }

console.log(obj)

obj.age = 18
console.log(obj)

console.log(sum(3, 97))
console.log(hi)

console.log(Promise)