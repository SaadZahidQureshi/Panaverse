"use strict";
let list = ["Zeehan", "Usama", "Junaid"]; // Junaod cant make dinner 
console.log("Announcement!! We found a biggert table for the dinners...");
list.unshift("Nadeem");
list.splice(2, 0, "Bilal");
list.push("Hammad");
console.log(list);
for (let i = 0; i < list.length; i++) {
    console.log("Dear " + list[i] + ",\nYou are cordially invited to a dinner party at my home on Saturday, February 26th at 7pm. I would be honored if you could attend and share your thoughts and experiences with us.\nSincerely,\nSaad Zahid.\n\n");
}
