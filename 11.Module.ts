import first from './11.ModuleFirst';
import second from './11.ModuleSecond';
import {xyz} from './11.ModuleFirst';

let a = new first();
let b = new second();
let c = new xyz();
console.log(a.abc);
console.log(b.abc);
console.log(c.xyz);
