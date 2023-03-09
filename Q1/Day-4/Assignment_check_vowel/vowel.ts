import { question } from "readline-sync";

let main = () =>{
    let input_string : string = question("Enter a string : ");
    let result = get_vowels(input_string)
    console.log("There are "+result.length+ " vowels in input string that are : " +result);

}

let get_vowels = (string : string): string[] =>{

    let vowels_array: string[] =["a", "e", "i", "o", "u"]
    let vowels : string[] =[];
    let split_string : string[] = string.split(" ");

    for (let i = 0; i < split_string.length; i++) {
        const element = split_string[i];
        for (let j = 0; j < element.length; j++) {
            const char: string = element.charAt(j);
            if (vowels_array.includes(char)){
                vowels.push(char);
            }
          }
        
    }
    return vowels;
}

main();
