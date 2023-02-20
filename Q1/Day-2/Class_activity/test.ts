let test_string = "zee is a smart boy";



let split_array = test_string.split(" ");

console.log(split_array);
console.log(split(test_string));

function split(string: string){
    let new_array : string[] = [];

    for (let i = 0; i < string.length; i++) {
        if(string.charAt(i) === " "){
            new_array.push(string.substring(i));
        }
    }
    console.log(new_array);
}





for (let i = 0; i < split_array.length; i++) {
    for (let j = 0; j < split_array.length - 1; j++) {
      if (split_array[j] > split_array[j + 1]) {
        // swap split_array[j] and split_array[j+1]
        [split_array[j], split_array[j + 1]] = [split_array[j + 1], split_array[j]];
      }
    }
  }

console.log(split_array);



for (let i = 0; i < split_array.length; i++) {
    for (let j = 0; j < split_array.length - 1; j++) {
      if (split_array[j] < split_array[j + 1]) {
        // swap split_array[j] and split_array[j+1]
        [split_array[j], split_array[j + 1]] = [split_array[j + 1], split_array[j]];
      }
    }
  }

console.log(split_array);

