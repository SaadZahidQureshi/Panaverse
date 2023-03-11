"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
const bankAccount1 = {
    accountNumber: '1234567890',
    accountHolder: 'John Doe',
    balance: 1000,
    accountType: 'savingAccount',
    PIN: 1234
};
const bankAccount2 = {
    accountNumber: '1234567890',
    accountHolder: 'John Doe',
    balance: 1000,
    accountType: 'currentAccount',
    PIN: 1234
};
let saveingAccount = () => {
    console.log('Saving account');
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
    let enter_pin = (0, readline_sync_1.question)("Enter pin number : ");
    let parse_pin = parseInt(enter_pin);
    if (parse_pin == bankAccount1.PIN) {
        let accountType = (0, readline_sync_1.question)("Choose Account Type  \n\n \t1.Saving Account \n \t2.Current Account \n \t3.Default :");
        let parseAccountType = parseInt(accountType);
        let lastTransaction = "";
        let parseLastTransaction = parseInt(lastTransaction);
        let haveMoney;
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
                else if (bankAccount2.accountType == 'currentAccount') {
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
