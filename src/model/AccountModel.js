/*jshint globalstrict: true*/
'use strict';
/*

  Data Structure
    Accounts are stored in sessionStorage with a list of Accounts. Couldn't store array of accounts directly
    $window.sessionStorage.getItem('demoAccounts') => {list:[<account array>]}

  Each account has data plus an array of transaction history
  {
    accountNumber:<account id number>,
    accountType:<Savings|Checking|...>,
    accountNickname:<Nickname>,
    accountBalance:<float>,
    transactions:[transactions]]
  }

  Each transaction contains
  {
    date:<date of transaction>,
    fromAccountName:<Nickname>,
    toAccountName:<Nickname>,
    fromAccountNumber:<account id number>,
    toAccountNumber:<account id number>,
    amount:<float>
  };

  Operations
    transferMoney : Moves money between accounts if amount doesn't violate 0 balance
      @arg fromAccountNumber
      @arg toAccountNumber
      @arg amount

    initializeTestData : Creates randomized Account data array and stores it in session storage

  Internal Helper methods

    addTransactions : Internal helper methops
      @arg date
      @arg fromAccountNumber
      @arg toAccountNumber
      @arg amount

    setAccount : Sets an account object in the session storageaccount
      if account.number matches an existing account, the latter is replaced with the former
      @arg Account object

    getAccount : Retrieves an account or empty JSON Object if not found
      @arg accountNumber


    getAccounts : retrieves the array of account objects form session storage

    setAccounts : Stores an array of account objects in session stlorage
      @arg accounts


*/
angular.module('ModelModule').service('AccountModel',
  function($window, StorageService) {
    'use strict';
    // Account constructor
    this.Account = function(number, type, nickname, balance, transactions) {
      if (undefined === transactions) transactions = [];
      var acct = {accountNumber:number, accountType:type, accountNickname:nickname, accountBalance:balance, transactions:transactions};
      this.setAccount(acct);

      return acct;
    };
    // Transfer Money
    this.transferMoney = function(fromAccountNumber, toAccountNumber, amount) {
      this.addTransactions(new Date(), fromAccountNumber, toAccountNumber, amount);
    };
    // Add Account History
    this.addTransactions = function(date, fromAccountNumber, toAccountNumber, amount) {
      // get the accounts
      var fromAccount = this.getAccount(fromAccountNumber);
      var toAccount = this.getAccount(toAccountNumber);
      if (+amount > +fromAccount.accountBalance) {
        //TODO how best to validate this? How best to communicate an error to the user?
        return false;
      }

      var hist = {date:date, fromAccountName:fromAccount.accountNickname, toAccountName:toAccount.accountNickname, fromAccountNumber:fromAccountNumber, toAccountNumber:toAccountNumber, amount:amount};

      // move money
      fromAccount.transactions.push(hist);
      toAccount.transactions.push(hist);

      fromAccount.accountBalance -= parseFloat(amount).toFixed(2);
      toAccount.accountBalance = parseFloat(toAccount.accountBalance) + parseFloat(amount);

      // Dang JavaScript Math issues, didn't work inline with the calculation so filter here
      fromAccount.accountBalance = parseFloat(fromAccount.accountBalance).toFixed(2);
      toAccount.accountBalance = parseFloat(toAccount.accountBalance).toFixed(2);

      // store the updated info
      this.setAccount(fromAccount);
      this.setAccount(toAccount);
      return true;
    };
    // Add a new Account to memory
    // TODO has to be a better way to store this, maybe use hash instead of an array
    this.setAccount = function(account) {
      var accounts = this.getAccounts();
      var newAcct = true;
      for (var i = 0; i < accounts.length; i++) {
        if (account.accountNumber == accounts[i].accountNumber) {
          newAcct = false;
          accounts[i] = account;
        }
      }
      if (newAcct) {
        accounts.push(account);
      }
      this.setAccounts(accounts);
    };
    // Get an account from memory
    this.getAccount = function(accountNumber) {
      var accounts = this.getAccounts();
      for (var i = 0; i < accounts.length; i++) {
        if (accountNumber == accounts[i].accountNumber) {
          return accounts[i];
        }
      }
      return {};
    };
    // get all accounts
    this.getAccounts = function() {
      var acctList = StorageService.getAccounts().list;
      if (acctList === null) acctList = [];
      return acctList;
    };
    // store account info
    this.setAccounts = function(accounts) {
      StorageService.setAccounts({list:accounts});
    };

    // for testing
    //initialize test data
    this.initializeTestData = function() {
      // reset data
      this.setAccounts(null);

      var accounts = this.getAccounts();

      var types = ['Savings', 'Checking', 'Joint Savings', 'Savings'];
      var nicknames = ['Home', 'Checking', 'Joint Savings', 'Auto Account'];

      for (var i = 0; i < nicknames.length; i++) {
        var acctId = Math.floor(Math.random() * 1000000);
        var amount = (Math.random() * 1000.00).toFixed(2);
        var hist = [{date: new Date(), fromAccountNumber:0, toAccountNumber:acctId, amount:amount}];
        var acct = {accountNumber:acctId, accountType:types[i], accountNickname:nicknames[i], accountBalance:amount, transactions:hist};
        this.setAccount(acct);
      }
    };
  }
);


