# Student Account System Test Plan

This test plan covers all business logic implemented in the legacy COBOL application for student account management. Use this plan to validate the system with business stakeholders and as a basis for future unit and integration tests in the Node.js transformation.

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status (Pass/Fail) | Comments |
|--------------|----------------------|----------------|------------|-----------------|--------------|--------------------|----------|
| TC01 | View current balance | Initial balance is set (default: 1000.00) | 1. Start app<br>2. Select 'View Balance' | Current balance is displayed |  |  |  |
| TC02 | Credit account with valid amount | Initial balance is set | 1. Start app<br>2. Select 'Credit Account'<br>3. Enter valid amount (e.g., 200.00) | Amount is added to balance; new balance displayed |  |  |  |
| TC03 | Debit account with valid amount | Initial balance is set; balance >= debit amount | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter valid amount (e.g., 100.00) | Amount is subtracted from balance; new balance displayed |  |  |  |
| TC04 | Debit account with insufficient funds | Initial balance is set; balance < debit amount | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter amount greater than balance | Error message: 'Insufficient funds for this debit.'; balance unchanged |  |  |  |
| TC05 | Credit account with zero or negative amount | Initial balance is set | 1. Start app<br>2. Select 'Credit Account'<br>3. Enter zero or negative amount | Error or rejection; balance unchanged |  |  |  |
| TC06 | Debit account with zero or negative amount | Initial balance is set | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter zero or negative amount | Error or rejection; balance unchanged |  |  |  |
| TC07 | Exit application | App is running | 1. Select 'Exit' from menu | Application exits cleanly with goodbye message |  |  |  |
| TC08 | Invalid menu selection | App is running | 1. Enter invalid menu option (e.g., 5) | Error message: 'Invalid choice, please select 1-4.' |  |  |  |

> Fill in Actual Result, Status, and Comments after executing each test.
