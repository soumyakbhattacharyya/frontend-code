import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

  name: string;
  size: string;
  complexity: string;

  constructor() { 
    this.name = "API";
    this.size = "Large";
    this.complexity = "High"
  }

  getComponentDescription(){
    return "Component Description - "  + this.name + " " + this.size + " " + this.complexity;
  }

  ngOnInit() {
  }

}
