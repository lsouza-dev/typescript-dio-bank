import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number):void => {
    if (this.validateStatus() && value > 0) {
      let balance: number = this.getBalance();
      balance += value + 10;
      this.setBalance(balance);
      console.log("Depósito com bônus realizado com sucesso.");
    }
  };
}
