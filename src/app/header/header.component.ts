import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() totalBudget:number;
  @Input() totalEarnings:number;
  @Input() totalExpenses:number;
  @Input() totalPercentage:number;

  constructor() {}
}
