import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  title: string;
  loginStatus:string;
  isLogin:boolean;

  constructor()
  {
    console.log("Wywołanie logowania");
    this.isLogin= false;
    if(this.isLogin){
      this.title= "Zalogowano";
      this.loginStatus="Zalogowano";
    }
    else{
       this.title= "Zaloguj Się";
       this.loginStatus="Zaloguj się";
    }
  }
  ngOnInit(){}
}
