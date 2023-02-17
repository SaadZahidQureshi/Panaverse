let ordinal_number : number[] = [1,2,3,4,5,6,7,8,9]

for (let i = 0; i < ordinal_number.length; i++) {
    const element = ordinal_number[i];
    if( element === 1){
        console.log(element+"st");
    }
    else if( element === 2){
        console.log(element+"nd");
    }
    else if( element === 3){
        console.log(element+"rd");
    }
    else{
        console.log(element+"th");
    }
}