import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount{
  constructor(name:string,accountNumber:number){
    super(name,accountNumber);
  }

  getLoan = (value:number):void => {
    if(this.validateStatus() && value > 0){
      console.log('Empréstimo realizado com sucesso.');
      this.deposit(value);
    }
    else console.log("O valor do empréstimo deve ser maior do que 0.");
  }
}