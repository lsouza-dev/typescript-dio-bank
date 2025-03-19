export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status:boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = ():string => {
    return this.name;
  }

  getBalance = ():number => {
    return this.balance;
  }

  setBalance = (value:number):void => {
    this.balance = value;
  }

  getAccountNumber = ():number => {
    return this.accountNumber;
  }

  deposit = (value:number):void => {
    if(this.validateStatus() && value > 0) {
      console.log('Depósito realizado com sucesso.');
      this.balance += value;
    }
    else console.log("O valor do depósito deve ser maior do que 0.");
  };

  withdraw = (value:number):void => {
    if(this.validateStatus() && this.balance >= value){
      console.log("Saque realizado com sucesso.");
      this.balance -= value;
    }
    else console.log("Valor de saque maior que o saldo.")
  };


  protected validateStatus = ():boolean => {
    if (this.status) return this.status;
    throw new Error("Conta desativada.")
  }
}
