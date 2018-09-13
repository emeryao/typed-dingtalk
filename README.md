# typed-dingtalk
[TypeScript](http://www.typescriptlang.org) declaration file for Dingtalk jsapi 

[![npm](https://img.shields.io/npm/v/typed-dingtalk.svg?style=for-the-badge)](https://www.npmjs.com/package/typed-dingtalk)
[![CircleCI branch](https://img.shields.io/circleci/project/github/Emeryao/typed-dingtalk/master.svg?style=for-the-badge)](https://circleci.com/gh/Emeryao/typed-dingtalk)

[![PR Welcome](https://img.shields.io/badge/PR-welcome-blue.svg?longCache=true&style=for-the-badge)](https://github.com/Emeryao/typed-dingtalk/pulls)
![npm type definitions](https://img.shields.io/npm/types/chalk.svg?style=for-the-badge)

## Install

* With [`npm`](https://www.npmjs.com/) installed  

    ```batch
    npm install typed-dingtalk --save-dev
    ```

* With [`typings`](https://github.com/typings/typings) installed  

    ```batch
    typings install github:Emeryao/typed-dingtalk -SG
    ```

* Or get the declaration file [here](./dingtalk.d.ts) and include it to your project

* for **[`Angular`](https://angular.io)**  
    projects created with `ng new` have a `./src/tsconfig.app.json` with default content
    ```json
    {
        "extends": "../tsconfig.json",
        "compilerOptions": {
            "outDir": "../out-tsc/app",
            "types": []
        },
        "exclude": []
    }
    ```
    the line of `"types":[]` should be **removed** to make the declaration file work

## About
Based on the official Dingtalk API [documentation](https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7629140.0.0.q6PDir&treeId=171&articleId=106834&docType=1)  
[`dingtalk.js`](https://g.alicdn.com/dingding/open-develop/2.3.0/dingtalk.js) Version `2.3.0`

### About the jsdoc comment
* all Chinese punctuations in comments have been removed
* a comment quoted by `"` means it is directly copy/paste from the official documentaion
* a comment quoted by `'` means it is copied from the official documentation and had been modified
    > a common scenario is removing some useless messages like `"the type is number blablabla"`
* a comment has no quotes means it is written by myself

## Last Update
`2018.09.13 UTC+08:00`
