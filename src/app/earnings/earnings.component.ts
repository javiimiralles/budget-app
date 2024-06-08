import { Component, OnInit } from '@angular/core';
import { Earnings } from './earnings.model';
import { EarningsService } from './earnings.service';

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.css']
})
export class EarningsComponent implements OnInit {

  earnings:Earnings[] = [];

  constructor(private earningsService:EarningsService) {}

  ngOnInit(): void {
    this.earnings = this.earningsService.earnings;
  }

  deleteIncome(income:Earnings) {
    this.earningsService.delete(income);
  }

}
