"use strict";
function show_magicians(magician) {
    console.log(magician);
}
function make_greate(magician) {
    for (let i = 0; i < magician.length; i++) {
        let element = magician[i];
        element = "Greater " + element;
        magician[i] = element;
    }
    console.log(magician);
}
let magician = ["saad", "zeshan", "bilal"];
show_magicians(magician);
make_greate(magician);
