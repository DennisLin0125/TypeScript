let test: 'bad' | 'good'

test = 'bad'

let c1: { name: string, age: number }
c1 = { name: 'John', age: 30 }

let d: { name: string, [propName: string]: any }
d = { name: 'dennis', age: 18, gender: '男' }

let foo: (a: number, b: number) => number
foo = function (n1: number, n2: number) {
    return n1 + n2
}

// 表示字串arr
let strArr: string[]
strArr = ['b', 'a']

// 表示字串arr
let numArr: number[]
numArr = [2, 1]

// 表示元組arr
let tuArr: [number, number]
tuArr = [2, 1]

// enum
enum Gender {
    Male = 0,
    Female = 1
}
let data: { name: string, gender: Gender }
data = {
    name: 'dennis',
    gender: Gender.Male
}
console.log(data.gender === Gender.Male)

// & 同時
let o: { name: string } & { age: number }
o = { name: 'xxx', age: 15 }

// 類型的別名
type myType = 1 | 2 | 3 | 4 | 5
let k: myType
let j1: myType
let p: myType