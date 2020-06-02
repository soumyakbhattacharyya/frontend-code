import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-influence',
  templateUrl: './influence.component.html',
  styleUrls: ['./influence.component.css']
})
export class InfluenceComponent implements OnInit {

  description: string;
  percentage: number;

  getDescription() { return this.description; }
  getPercentage() { return this.percentage; }

  constructor() { 
    this.description = "Shedule Slippage";
    this.percentage = 20;
  }

  ngOnInit() {
  }

}
