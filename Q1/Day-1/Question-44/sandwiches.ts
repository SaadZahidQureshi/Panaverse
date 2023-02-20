

let sandwiches : string[] = ["cheese", "chicken", "chillies"];


function make_sandwiches(...sandwiches: string[]){
    console.log(`Making a sandwich with ${sandwiches.length} ingredients: ${sandwiches.join(', ')}`);

}

make_sandwiches('bread', 'lettuce', 'tomato', 'bacon', 'mayonnaise');
make_sandwiches('bread', 'ham', 'cheese');
make_sandwiches('bread', 'peanut butter', 'jelly');