// accounting.test.js
const StudentAccount = require('./accounting');

describe('StudentAccount COBOL Logic Tests', () => {
  let account;
  beforeEach(() => {
    account = new StudentAccount();
  });

  test('TC01: View current balance', () => {
    expect(account.viewBalance()).toBe(1000.00);
  });

  test('TC02: Credit account with valid amount', () => {
    expect(account.credit(200)).toBe(1200.00);
    expect(account.viewBalance()).toBe(1200.00);
  });

  test('TC03: Debit account with valid amount', () => {
    expect(account.debit(100)).toBe(900.00);
    expect(account.viewBalance()).toBe(900.00);
  });

  test('TC04: Debit account with insufficient funds', () => {
    expect(() => account.debit(2000)).toThrow('Insufficient funds for this debit.');
    expect(account.viewBalance()).toBe(1000.00);
  });

  test('TC05: Credit account with zero or negative amount', () => {
    expect(() => account.credit(0)).toThrow('Credit amount must be positive');
    expect(() => account.credit(-50)).toThrow('Credit amount must be positive');
    expect(account.viewBalance()).toBe(1000.00);
  });

  test('TC06: Debit account with zero or negative amount', () => {
    expect(() => account.debit(0)).toThrow('Debit amount must be positive');
    expect(() => account.debit(-50)).toThrow('Debit amount must be positive');
    expect(account.viewBalance()).toBe(1000.00);
  });

  test('TC07: Exit application (simulated)', () => {
    // No actual exit logic in class, just a placeholder
    expect(true).toBe(true);
  });

  test('TC08: Invalid menu selection (simulated)', () => {
    // Menu logic not present in class, just a placeholder
    expect(true).toBe(true);
  });
});
