"use strict";
let alien_color = "green";
if (alien_color == "green") {
    console.log("The player just earned 5 points!");
}
else if (alien_color === "yellow") {
    console.log("The player just earned 10 points!");
}
else if (alien_color === "red") {
    console.log("The player just earned 15 points!");
}
// Another version of the above code
let alien_color_v2 = "yellow";
if (alien_color_v2 === "green") {
    console.log("Player just earned 5 points");
}
if (alien_color_v2 === "yellow") {
    console.log("The player just earned 10 points!");
}
if (alien_color_v2 === "red") {
    console.log("The player just earned 15 points!");
}
// Another 3rd version of the above code
let alien_color_v3 = "red";
if (alien_color_v3 === "green") {
    console.log("Player just earned 5 points");
}
if (alien_color_v3 === "yellow") {
    console.log("The player just earned 10 points!");
}
if (alien_color_v3 === "red") {
    console.log("The player just earned 15 points!");
}
