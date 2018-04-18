const fs = require('fs');
const path = require('path');

let baseDir = process.cwd();

let typesFolder = `${baseDir}/../@types`;

let targetPath = `${baseDir}/../@types/dingtalk`;

if (!fs.existsSync(typesFolder)) {
    fs.mkdirSync(typesFolder);
}

if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath);
}

console.log('Copying `dingtalk.d.ts` to "./node_modules/@types/dingtalk/index.d.ts" to make it work');
fs.copyFileSync(`${baseDir}/dingtalk.d.ts`, `${targetPath}/index.d.ts`);