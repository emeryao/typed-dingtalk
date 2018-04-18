import { isArray } from 'util';
import * as fs from 'fs';
// tslint:disable-next-line:no-var-requires no-require-imports
const ddApi = require('../api-list-plain.json');

let ddJson: any = {};

for (const key in ddApi) {
    if (ddApi.hasOwnProperty(key)) {
        const element = ddApi[key];
        // if (key != 'device') {
        //     continue;
        // }
        console.log(key);
        if (isArray(element)) {
            for (const item of element) {
                let propArr = (item.namespace as string).split('.');
                for (let index = 0; index < propArr.length; index++) {
                    if (ddJson[propArr[0]]) {
                        if (ddJson[propArr[0]][propArr[1]]) {
                            ddJson[propArr[0]][propArr[1]][propArr[2]] = item.name;
                        } else {
                            ddJson[propArr[0]][propArr[1]] = {};
                        }
                    } else {
                        ddJson[propArr[0]] = {};
                    }
                }
            }
        }
    }
}

let json = JSON.stringify(ddJson, null, 4);
console.log(json);
fs.writeFileSync('./api-list.json', json, { encoding: 'utf8' });
