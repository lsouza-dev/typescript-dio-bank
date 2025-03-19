import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { BonusAccount } from "./class/BonusAccount";

const peopleAcc:PeopleAccount = new PeopleAccount(641278,'Luiz Fabiano',132);
const companyAcc:CompanyAccount = new CompanyAccount('DIO',12354);
const bonusAcc:BonusAccount = new BonusAccount('Bonus',564);

console.log(`\nPeople Account Infos:\nName: ${peopleAcc.getName()}\nAccount Number: ${peopleAcc.getAccountNumber()}\nBalance: ${peopleAcc.getBalance().toFixed(2)}\n`);
peopleAcc.withdraw(20);
peopleAcc.deposit(50);
console.log(`Saldo após o depósito: ${peopleAcc.getBalance().toFixed(2)}`);
peopleAcc.withdraw(10);
console.log(`Saldo após o saque: ${peopleAcc.getBalance().toFixed(2)}`);

console.log(`\nCompany Account Infos:\nName: ${companyAcc.getName()}\nAccount Number: ${companyAcc.getAccountNumber()}\nBalance: ${companyAcc.getBalance().toFixed(2)}\n`);
companyAcc.withdraw(20);
companyAcc.deposit(50);
console.log(`Saldo após o depósito: ${companyAcc.getBalance().toFixed(2)}`);
companyAcc.getLoan(100);
console.log(`Saldo após o empréstimo: ${companyAcc.getBalance().toFixed(2)}`);

console.log(`\nBonus Account Infos:\nName: ${bonusAcc.getName()}\nAccount Number: ${bonusAcc.getAccountNumber()}\nBalance: ${bonusAcc.getBalance().toFixed(2)}\n`);
bonusAcc.withdraw(20);
bonusAcc.deposit(100);
console.log(`Saldo após o depósito com bônus: ${bonusAcc.getBalance().toFixed(2)}`);
