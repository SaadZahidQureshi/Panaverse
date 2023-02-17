let username : string[] = ['admin','Eric', 'john','Wick','tom'];

for (let i = 0; i < username.length; i++) {
    const element = username[i];
    if(element === 'admin'){
        console.log("Hello! "+element+" would you like to see status reports");
    }
    else{
        console.log("Hello! "+element+" thank you for logging in again");
    }
    
}