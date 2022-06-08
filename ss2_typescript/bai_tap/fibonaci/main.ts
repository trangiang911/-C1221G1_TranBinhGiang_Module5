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


function totalFibonaci(answer:string){
    let arr:Array<number> = [0,1];
    let total:number=0;
    for(let i:number = 0; i<=parseInt(answer)+1;i++){
        if(i==0){
            total+=arr[i]
        }else{
            arr[i+1]=arr[i]+arr[i-1];
            total+=arr[i];
        }
    }
    console.log(arr);
    console.log(total);
}

rl.question('enter count loop: ', (x:any) => totalFibonaci(x));


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