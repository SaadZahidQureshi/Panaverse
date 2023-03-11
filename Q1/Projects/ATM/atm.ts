import { question } from "readline-sync";

type BankAccount = {
    accountNumber: string;
    accountHolder: string;
    balance: number;
    accountType: string;
    PIN : number;
  }
  
  const bankAccount1: BankAccount = {
    accountNumber: '1234567890',
    accountHolder: 'John Doe',
    balance: 1000,
    accountType : 'savingAccount',
    PIN : 1234
}
  const bankAccount2: BankAccount = {
    accountNumber: '1234567890',
    accountHolder: 'John Doe',
    balance: 1000,
    accountType : 'currentAccount',
    PIN : 1234
  }
  
  
let saveingAccount = () => {
    console.log('Saving account');

    

    //overdaraft allow
    ////interset allow 
    //limited ammount of transaction

};
 let currentAccount = () => {
    console.log('Current Account');
 };

function main() {
  console.log("\n");
  console.log("Welcome To ATM Machine");
  console.log("\n");
  console.log("\t Please insert your card ");
  console.log("\n");

  console.log("Card Varifications...");

  let enter_pin: string = question("Enter pin number : ");
  let parse_pin: number = parseInt(enter_pin);
  if (parse_pin == bankAccount1.PIN) {
    let accountType: string = question(
      "Choose Account Type  \n\n \t1.Saving Account \n \t2.Current Account \n \t3.Default :"
    );
    let parseAccountType: number = parseInt(accountType);

    let lastTransaction: string = "";
    let parseLastTransaction: number = parseInt(lastTransaction);
    let haveMoney: string;

    switch (parseAccountType) {
      case 1:
        saveingAccount();
        break;
      case 2:
        currentAccount();
        break;
      default:
        if (bankAccount2.accountType == 'savingAccount') {
            saveingAccount();
        }
        else if(bankAccount2.accountType == 'currentAccount') {
            currentAccount();
    }
  } 
  }
  else {
    console.log("Sorry! Invalid PIN ");
  }
}



// let checkBalance = () => {};

// let withdrawBalance = () => {};

// let changePIN = () => {};

main();
