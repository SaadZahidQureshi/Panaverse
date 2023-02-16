let list: string[] = ["Zeehan", "Usama", "Junaid"]; // Junaod cant make dinner 


console.log("Announcement!! we can invite only two people for dinner...")


list.unshift("Nadeem")
list.splice(2,0,"Bilal")
list.push("Hammad")



console.log(list)
console.log(list.length)


for (let i = 0; i <= list.length; i++) {
    if(list.length >= 2){
        let not_invited = list.pop()
        console.log( not_invited + " Sorry!! we didn't find enough space on table.")
    }
    
}


console.log(list)
console.log(list.length)


for (let i = 0; i < list.length; i++) {
    console.log("Dear "+ list[i]+",\nYou are Still cordially invited to a dinner party at my home on Saturday, February 26th at 7pm. I would be honored if you could attend and share your thoughts and experiences with us.\nSincerely,\nSaad Zahid.\n\n");
}

for (let i = 0; i = list.length; i++) {
    list.pop()    
}
console.log(list)