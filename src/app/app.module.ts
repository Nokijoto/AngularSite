import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegisterComponent } from './components/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CbComponent } from './components/cb/cb.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TestsComponent } from './components/tests/tests.component';
import { BookComponent } from './components/book/book.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    LoginpageComponent,
    RegisterComponent,
    CbComponent,
    FooterComponent,
    ToolbarComponent,
    TestsComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [
    LoginpageComponent
  ],
  bootstrap: [WelcomeComponent]
})
export class AppModule { }
