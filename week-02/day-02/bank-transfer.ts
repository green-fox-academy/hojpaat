'use strict';
export {}

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]


/*function listNameBalance (a: any[]): any {
  let data: string [] = [];
  accounts.forEach(value => {
    data.push(value.clientName, value.balance);
  });
  console.log(data);
}

listNameBalance(accounts);*/


// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

const bankAccount = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

function transferAmount (accounts = bankAccount, fromNumber: number, toNumber: number, money: number) {
  


  //nedded variables
  let fromIndex: number = 0;
  let toIndex: number = 0;

  //get the index of the accounts and check if the accounts number are valid
  function accountIndex(){
  
    // get the index of the first bank account inside the array
    let from: boolean [] = [];
    accounts.filter(function (account) {
      from.push(account.accountNumber === fromNumber);
    });
    
    fromIndex = (from.indexOf(true));
    
    //error message in case of incorrect bank account number
    if (fromIndex === -1){
      console.log('Transfer from: 404 - account not found')
    }
    
    
    //get the index of the secons bank account inside the array
    let to: boolean [] = [];
    accounts.filter(function (account, index) {
      to.push(account.accountNumber === toNumber);
    });
    
    toIndex = (to.indexOf(true));
    
    //error message ince of the second bank account number is incorrect
    if (toIndex === -1){
      console.log('Transfer to: 404 - account not found');
    }
  }
  accountIndex();
  //money tranfer
  function moneyTransfer() {
    if(accounts[fromIndex].balance < money){
      console.log('Overdraft');
    } else {
      accounts[fromIndex].balance -= money;
      accounts[toIndex].balance += money;
      console.log('Successful transfer');
    }
  }
  moneyTransfer();
 console.log(bankAccount);
}

transferAmount(bankAccount, 43546731, 23456311, 500.0)
// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

/*export = {
  getNameAndBalance,
  transferAmount,
  accounts
};*/