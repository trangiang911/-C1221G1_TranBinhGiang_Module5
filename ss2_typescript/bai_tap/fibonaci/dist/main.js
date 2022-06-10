"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// function fibonaci(count:number):any{
//     let num1:number=0;
//     let num2:number=1;
//     let temp=0;
//     let total=0;
//     for(let i:number=1;i<=count;i++){
//         console.log(num1)
//         temp=num1+num2;
//         num1=num2;
//         num2=temp;
//         total+=num1
//     }
//     console.log('total of fibonaci: '+total)
// }
// fibonaci(20);
//cách làm bằng Array
function fibonaci(count) {
    let arr = [0, 1];
    for (let i = 1; i <= parseInt(count); i++) {
        arr[i + 1] = arr[i] + arr[i - 1];
    }
    console.log(arr);
    return arr;
}
function totalFibonaci(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    console.log(total);
}
rl.question('enter count loop: ', (answer) => totalFibonaci(fibonaci(answer)));
//để quy
// function fibonaci(n:number):number{
//     if(n<=1){
//         return n;
//     }
//     return fibonaci(n-1)+fibonaci(n-2);
// }
// function getFibonaci(count:number):void{
//     let total:number=0;
//     for(let i:number=0;i<=count;i++){
//         console.log(fibonaci(i))
//         total+=fibonaci(i);
//     }
//     console.log('tong day so fibonaci là: '+total)
// }
// rl.question('enter count loop: ',(answer:any) => getFibonaci(parseInt(answer)));
