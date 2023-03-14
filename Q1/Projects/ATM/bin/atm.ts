#! /usr/bin/env node
import { question } from "readline-sync";

type BankAccount = {
  accountNumber: number;
  accountHolder: string;
  balance: number;
  accountType: string;
  PIN: number;
  Expiry: Date;
};

const bankAccount1: BankAccount = {
  accountNumber: 123456789,
  accountHolder: "John Doe",
  balance: 1000,
  accountType: "savingAccount",
  PIN: 1234,
  Expiry: new Date(2022, 10),
};
const bankAccount2: BankAccount = {
  accountNumber: 1234567890,
  accountHolder: "John Doe",
  balance: 1000,
  accountType: "currentAccount",
  PIN: 1234,
  Expiry: new Date(2024, 10),
};

let saveingAccount = () => {
  console.log("Saving account");

  let choose: string = question(
    "\nChoose an option to : \n\n\t 1.Cash withdrawal \n\t 2.Balance inquiry \n\t 3.Fund transfer "
  );
  let parseChoose: number = parseInt(choose);

  switch (parseChoose) {
    case 1:
      cashWithdraw();
      break;
    case 2:
      balanceInquiry();
      break;
    case 3:
      fundTransfer();
      break;
  }

  //overdaraft allow
  ////interset allow
  //limited ammount of transaction
};

let currentAccount = () => {
  console.log("Current Account");

  let choose: string = question(
    "\nChoose an option to : \n\n\t 1.Cash withdrawal \n\t 2.Balance inquiry \n\t 3.Fund transfer "
  );
  let parseChoose: number = parseInt(choose);

  switch (parseChoose) {
    case 1:
      cashWithdraw();
      break;
    case 2:
      balanceInquiry();
      break;
    case 3:
      fundTransfer();
      break;
  }
};

let cashWithdraw = () => {
  // console.log('Cash Withdraw');
  let amount: string = question("Enter your amount  : ");
  let parseAmount: number = parseInt(amount);
  if (parseAmount > bankAccount1.balance) {
    console.log("Sorry ! your balance is less than " + parseAmount);
    let another_tanscation: string = question(
      "Do you want to to do another transaction  y/n : "
    );
    if (another_tanscation.toLowerCase() == "y") {
      if (bankAccount1.accountType == "currentAccount") {
        currentAccount();
      } else if (bankAccount1.accountType == "savingAccount") {
        saveingAccount();
      }
    } else {
      console.log("Thanks for using our services");
    }
  } else {
    bankAccount1.balance = bankAccount1.balance - parseAmount;
    // console.log(bankAccount1.balance);
    console.log("Your transaction is beaing processed ...");
    console.log("Thanks for using our services");
    // deduct the amount from the atm machine
  }
};
let balanceInquiry = () => {
  console.log("Your current Balance is : " + bankAccount1.balance);
};
let fundTransfer = () => {
  let accountNumber: string = question("Enter Bank Account Number : ");
  let pareseaccountNumber: number = parseInt(accountNumber);

  if (pareseaccountNumber == bankAccount2.accountNumber) {
    let amount: string = question("Enter amount you want to transfer : ");
    let pareseamount: number = parseInt(amount);
    if (pareseamount > bankAccount1.balance) {
      console.log("Sorry ! your balance is less than " + pareseamount);
      let another_tanscation: string = question(
        "Do you want to to do another transaction  y/n : "
      );
      if (another_tanscation.toLowerCase() == "y") {
        if (bankAccount1.accountType == "currentAccount") {
          currentAccount();
        } else if (bankAccount1.accountType == "savingAccount") {
          saveingAccount();
        }
      }
    } else if (pareseamount < bankAccount1.balance) {
      // console.log("your "
      bankAccount2.balance = bankAccount2.balance + pareseamount;
      bankAccount1.balance = bankAccount1.balance - pareseamount;
      console.log("transaction is being processed ...");
      console.log("your remaining balance is : " + bankAccount1.balance);
    }
  } else if (bankAccount1.accountNumber == pareseaccountNumber) {
    console.log(
      "sorry!! you cant proced with this transaction because this belong to your own account"
    );
  } else {
    console.log("your accounbt number is not belong to any account");
  }
};

function main() {
  console.log("\n");
  console.log("Welcome To ATM Machine");
  console.log("\n");
  console.log("\t Please insert your card ");
  console.log("\n");

  console.log("Card Varifications...");

  if (bankAccount1.Expiry > new Date(Date.now())) {
    console.log(" Card has expired");
  } else {
    // console.log(bankAccount1.Expiry);
    // console.log(new Date(Date.now() ));

    let enter_pin: string = question("Enter pin number : ");
    let parse_pin: number = parseInt(enter_pin);
    if (parse_pin == bankAccount1.PIN) {
      let accountType: string = question(
        "Choose Account Type  \n\n \t1.Saving Account \n \t2.Current Account \n \t3.Default :"
      );
      let parseAccountType: number = parseInt(accountType);

      switch (parseAccountType) {
        case 1:
          saveingAccount();
          break;
        case 2:
          currentAccount();
          break;
        default:
          if (bankAccount2.accountType == "savingAccount") {
            saveingAccount();
          } else if (bankAccount2.accountType == "currentAccount") {
            currentAccount();
          }
      }
    } else {
      console.log("Sorry! Invalid PIN ");
    }
  }
}

// let checkBalance = () => {};

// let withdrawBalance = () => {};

// let changePIN = () => {};

main();
