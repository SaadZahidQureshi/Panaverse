let message: string = "the quick brown fox jumped over the laZy dog";

//Upercase
let uperCaseMessage: string = message.toUpperCase();
console.log(uperCaseMessage);

// Lowercase

let lowerCaseMessage: string = message.toLowerCase();
console.log(lowerCaseMessage);

// Titlecase

function toTitleCase(message: string) {
  if (message == null || message.length == 0) {
    return "String can't be null.";
  } else {
    let list: string[] = message.split(" ");
    //console.log("list -> "+list);
    for (let i = 0; i < list.length; i++) {
      list[i] = list[i].charAt(0).toUpperCase() + list[i].slice(1).toLowerCase();
      //let titelCaseString = list[i].join(',')
    }
    // console.log(list);
    let titleCaseMessage: string = list.join(" ");
    console.log(titleCaseMessage);
  }
}

// let message1: string = "";
console.log(toTitleCase(message));
