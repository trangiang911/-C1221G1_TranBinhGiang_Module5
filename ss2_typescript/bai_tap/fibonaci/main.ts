import * as readline from 'readline';
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


function Fibonaci(count:string):Array<number>{
    let arr:Array<number> = [0,1];
    for(let i:number = 1; i<=parseInt(count);i++){
            arr[i+1]=arr[i]+arr[i-1];
        }
        console.log(arr);
    return arr;
}

function totalFibonaci(arr:Array<number>){
    let total:number=0;
    for(let i:number=0;i<arr.length;i++){
        total+=arr[i];
    }
    console.log(total);
}


rl.question('enter count loop: ', (answer:any) => totalFibonaci(Fibonaci(answer)));


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