import { Earnings } from "./earnings.model";

export class EarningsService {

  earnings:Earnings[] = [
    new Earnings("Salario", 4000),
    new Earnings("Venta Coche", 500)
  ];

  delete(income:Earnings) {
    const index:number = this.earnings.indexOf(income);
    this.earnings.splice(index, 1);
  }

}
