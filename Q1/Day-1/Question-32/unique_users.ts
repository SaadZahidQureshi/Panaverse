let current_users : string[] = ['admin','Eric', 'john','Wick','tom'];
let new_users : string[] = ['Saad','Eric', 'Zeeshan','Wick','Bilal'];


for (let i = 0; i < new_users.length; i++) {
    const element = new_users[i];
    if(current_users.includes(element)){
        console.log(element+" you need to enter a new username")
    }
    else{
        console.log(element+ " is available.")
    }

}