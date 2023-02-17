function make_shirt(size: string = "Larg", text: string = "I Love Typescript") {
    console.log("Making  a " + size + " shirt with message : " + text);
}

make_shirt()
make_shirt("medium")
make_shirt('small', "TypeScript is awesome")