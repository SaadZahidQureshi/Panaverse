
function show_magicians(magician :string[]){
    console.log(magician)    
}


function make_greate(magician :string[]){
    for (let i = 0; i < magician.length; i++) {
        let element = magician[i];
        element = "Greater " + element
        magician[i] = element;
    }
    console.log(magician);
}

let magician : string[] = ["saad", "zeshan", "bilal"]

show_magicians(magician)
make_greate(magician)