"use strict";
let test;
test = 'bad';
let c1;
c1 = { name: 'John', age: 30 };
let d;
d = { name: 'dennis', age: 18, gender: '男' };
let foo;
foo = function (n1, n2) {
    return n1 + n2;
};
// 表示字串arr
let strArr;
strArr = ['b', 'a'];
// 表示字串arr
let numArr;
numArr = [2, 1];
// 表示元組arr
let tuArr;
tuArr = [2, 1];
// enum
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
let data;
data = {
    name: 'dennis',
    gender: Gender.Male
};
console.log(data.gender === Gender.Male);
// & 同時
let o;
o = { name: 'xxx', age: 15 };
let k;
let j1;
let p;
