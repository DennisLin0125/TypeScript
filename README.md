# TypeScript

## 安裝
```bash
npm i -g typescript
```

## 初始化
```bash
tsc --init
```

## 全域HMR
```bash
tsc -w
```

## 指定文件HMR
```bash
tsc XXX -w
```

## tsconfig.json
```json
{
  "include":[
    "./src"
  ],
  "exclude": [

  ],
  "compilerOptions": {
    "target": "ES6",
    "module":"ES6",    
    "outDir": "./dist",
    "noEmitOnError": true,
    "strict": true, 
  }
}
```


### 基本類
```ts
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


```