import { Component, Input, OnInit } from '@angular/core';
import { Expenses } from './expenses.model';
import { ExpensesService } from './expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  expenses:Expenses[] = [];
  @Input() totalEarnings:number;

  constructor(private expensesService:ExpensesService) {}

  ngOnInit(): void {
    this.expenses = this.expensesService.expenses;
  }

  deleteExpense(expense:Expenses) {
    this.expensesService.delete(expense);
  }

  calculatePercentage(expense:Expenses) {
    return expense.value/this.totalEarnings;
  }

}
