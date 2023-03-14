"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
inquirer_1.default.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What's your name?",
    },
    {
        type: 'list',
        name: 'color',
        message: 'What is your favorite color?',
        choices: ['red', 'blue', 'green'],
    },
])
    .then((answers) => {
    console.log(`Hi ${answers.name}, your favorite color is ${answers.color}!`);
});
// let array : string[] = ["saad", "zeeshan", "bilal", "ali", "saad", "zeeshan", ];
// let _name : string ="zeeshan";
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if(_name != element){
//         console.log("element not found: " + element);
//     } 
//     else{
//         if(_name == element){
//             console.log(element);
//             break;
//         }
//         // console.log("element not found");
//         // break;
//     }
// }
