import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  id: string;
  name: string;
  description: string;

  addedName: string;
  addedDescription: string;

  constructor() {
    this.id = "123";
  }

  ngOnInit() {
  }

  getName(){return this.name;}

  addRole(event){
    this.name = this.addedName;
    this.description = this.addedDescription;
  }

}
