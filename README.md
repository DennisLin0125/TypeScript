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