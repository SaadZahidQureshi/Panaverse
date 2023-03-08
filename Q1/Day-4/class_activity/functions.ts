// import * as readline from 'readline';

// arrow functions 
// let sum1 = () => 2 + 2;

// let sum2 = () => 2 + 2;

// console.log(sum1());

// if-else logical conditions 




// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What is your name? ', (name: string) => {
//   console.log(`Hello, ${name}!`);
//   rl.close();
// });

let number = 7


if (number%2 == 0){
    console.log("even number")
}
else{
    console.log("odd number")
}

let flag : boolean = false;

if (number > 2){
    for (let i = 2; i < number; i++) {
        if (number % i == 0 ){
            flag = true;
            break
        }
        
    }
}
if(flag == true){
    console.log("not primne");
}
else{
    console.log("primne");

}

//arrays
// push pop shift unshift

let array : string[] = []

array.push("saad")
array.push("zeeshan")

console.log(array.unshift("bilal"))
console.log(array)

console.log(array.shift())

// console.log(array.pop())
console.log(array)


//splice and slice

array.push("nadeem")
array.push("usama")

console.log("array -> ",array)

console.log("Splice -> ",array.splice(1,3,'kamran'))

array.push("nadeem")
array.push("usama")

console.log("final ->  ",array)

console.log("Slice -> ",array.slice(0,3))