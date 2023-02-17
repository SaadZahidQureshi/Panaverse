let animals :string[] = ["dog", "cat", "rabit"]

for (let i = 0; i < animals.length; i++) {
    const element = animals[i];
    console.log(element);
}

for (let animal of animals) {
    console.log(animal +" would make a great pet.");
}
console.log("Any of these animals would make a great pet!");