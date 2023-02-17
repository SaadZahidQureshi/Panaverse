let usernames : string[] = ['admin','Eric', 'john','Wick','tom'];

if(usernames.length == 0){
    console.log('We need to find some users!')
}
else{
    for (let username of usernames) {
        console.log("Hello, " + username + "!");
      }
}

usernames = [];

if(usernames.length == 0){
    console.log('We need to find some users!')
}