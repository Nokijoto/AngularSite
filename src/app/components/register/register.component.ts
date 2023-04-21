import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title: string;
  isSingedUp:boolean;

  constructor()
  {
  this.title="Registration";
  this.isSingedUp=true;


  }
  ngOnInit(){}

  register()
  {
    this.isSingedUp=false;
  }
  login()
  {
    this.isSingedUp=true;
  }
}
