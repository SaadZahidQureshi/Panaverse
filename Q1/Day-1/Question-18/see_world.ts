
let want_to_visit : string[] = ["Switzerland", "Germany", "Kashmiri", "Australia","USA"]
let want_to_visit_sort : string[] = []


console.log("Orignal Array -> "+want_to_visit)

// let ordered_list = want_to_visit.sort()

// for (let i = 0; i < want_to_visit.length; i++) {
//     for (let j = i + 1; j < want_to_visit.length; j++) {
//       if (want_to_visit[i] > want_to_visit[j]) {
//         let temp = want_to_visit[i];
//         want_to_visit[i] = want_to_visit[j];
//         want_to_visit[j] = temp;
//       }
//     }
//   }

console.log("Alphabatical order  -> "+[...want_to_visit].sort())

console.log("Orignal Array -> "+want_to_visit)

console.log("Sorted Reverese Alphabatical order  -> "+[...want_to_visit].sort().reverse())

console.log("Orignal Array -> "+want_to_visit)

console.log("Reverese Alphabatical order  -> "+[...want_to_visit].reverse())

console.log("(orignal) Reverse Reverese Alphabatical order  -> "+[...want_to_visit].reverse().reverse())

console.log("Alphabatical order  -> "+[...want_to_visit].sort())

console.log("Sorted Reverese Alphabatical order  -> "+[...want_to_visit].sort().sort())


// for (let i = 0; i < want_to_visit.length; i++) {
//     const element = want_to_visit[i];
    
// }