#! /usr/bin/env node
import { question } from "readline-sync";

function main() {
  console.log("My Calculator Application");

  let str1: string = question("Enter 1st number : ");
  let oper: string = question("Enter operator : ");
  let str2: string = question("Enter 2nd number : ");

  const validinput: boolean =
    isNumber(str1) && isNumber(str2) && isOperator(oper);
  // console.log(validinput)

  if (validinput) {
    const number1: number = parseInt(str1);
    const number2: number = parseInt(str2);
    // const operator : number =parseInt(oper)

    console.log(calculate(number1, number2, oper));
  } else {
    console.log("\nInvalid input\n");
    main();
  }
}

let isOperator = (operator: string) => {
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

let isNumber = (str: string): boolean => {
  let numbers = parseInt(str);
  const isNum: boolean = !isNaN(numbers);
  return isNum;
};

let calculate = (number1: number, number2: number, operator: string) => {
  let result: number;
  if (operator == "+") {
    result = number1 + number2;
    return result;
  } else if (operator == "-") {
    result = number1 - number2;
    return result;
  } else if (operator == "*") {
    result = number1 * number2;
    return result;
  } else if (operator == "/") {
    result = number1 / number2;
    return result;
  }
};

// console.log(calculate(number1 , number2, operator));
main();
