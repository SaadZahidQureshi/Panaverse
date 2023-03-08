#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
function main() {
    console.log("My Calculator Application");
    let str1 = (0, readline_sync_1.question)("Enter 1st number : ");
    let oper = (0, readline_sync_1.question)("Enter operator : ");
    let str2 = (0, readline_sync_1.question)("Enter 2nd number : ");
    const validinput = isNumber(str1) && isNumber(str2) && isOperator(oper);
    console.log(validinput);
    if (validinput) {
        const number1 = parseInt(str1);
        const number2 = parseInt(str2);
        // const operator : number =parseInt(oper)
        console.log(calculate(number1, number2, oper));
    }
    else {
        console.log("\nInvalid input\n");
        main();
    }
}
let isOperator = (operator) => {
    switch (operator) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
};
let isNumber = (str) => {
    let numbers = parseInt(str);
    const isNum = !isNaN(numbers);
    return isNum;
};
let calculate = (number1, number2, operator) => {
    let result;
    if (operator == "+") {
        result = number1 + number2;
        return result;
    }
    else if (operator == "-") {
        result = number1 - number2;
        return result;
    }
    else if (operator == "*") {
        result = number1 * number2;
        return result;
    }
    else if (operator == "/") {
        result = number1 / number2;
        return result;
    }
};
// console.log(calculate(number1 , number2, operator));
main();
