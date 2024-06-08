import { Expenses } from "./expenses.model";

export class ExpensesService {

  expenses:Expenses[] = [
    new Expenses("Alguiler del departamento", 900),
    new Expenses("Ropa", 200)
  ];

  delete(expense:Expenses) {
    const index:number = this.expenses.indexOf(expense);
    this.expenses.splice(index, 1);
  }

}
