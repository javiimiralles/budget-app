import { Component, OnInit } from '@angular/core';
import { Earnings } from '../earnings/earnings.model';
import { EarningsService } from '../earnings/earnings.service';
import { Expenses } from '../expenses/expenses.model';
import { ExpensesService } from '../expenses/expenses.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  type:string = "incomeOperation";
  descriptionInput:string;
  valueInput:number;

  constructor(private earningsService:EarningsService, private expensesService:ExpensesService) {}

  ngOnInit(): void {

  }

  getOperationType(event) {
    this.type = event.target.value;
  }

  addValue() {
    if(this.type === "incomeOperation")
      this.earningsService.earnings.push(new Earnings(this.descriptionInput, this.valueInput));
    else
      this.expensesService.expenses.push(new Expenses(this.descriptionInput, this.valueInput));
  }
}
