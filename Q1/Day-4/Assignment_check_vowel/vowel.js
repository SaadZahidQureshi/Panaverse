"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
let main = () => {
    let input_string = (0, readline_sync_1.question)("Enter a string : ");
    let result = get_vowels(input_string);
    console.log("There are " + result.length + " vowels in input string that are : " + result);
};
let get_vowels = (string) => {
    let vowels_array = ["a", "e", "i", "o", "u"];
    let vowels = [];
    let split_string = string.split(" ");
    for (let i = 0; i < split_string.length; i++) {
        const element = split_string[i];
        for (let j = 0; j < element.length; j++) {
            const char = element.charAt(j);
            if (vowels_array.includes(char)) {
                vowels.push(char);
            }
        }
    }
    return vowels;
};
main();
