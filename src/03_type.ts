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