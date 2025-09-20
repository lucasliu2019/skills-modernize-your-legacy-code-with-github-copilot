// accounting.js
// Node.js implementation of student account logic for testing

class StudentAccount {
  constructor(initialBalance = 1000.00) {
    this.balance = initialBalance;
  }

  viewBalance() {
    return this.balance;
  }

  credit(amount) {
    if (amount <= 0) {
      throw new Error('Credit amount must be positive');
    }
    this.balance += amount;
    return this.balance;
  }

  debit(amount) {
    if (amount <= 0) {
      throw new Error('Debit amount must be positive');
    }
    if (this.balance < amount) {
      throw new Error('Insufficient funds for this debit.');
    }
    this.balance -= amount;
    return this.balance;
  }
}

module.exports = StudentAccount;
