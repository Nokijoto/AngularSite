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
import { BookComponent } from './components/bookPage/book/book.component';
import { AdminComponent } from './components/admin/admin.component';
import { BookdataComponent } from './components/bookPage/book-data/book-data.component';
import { BookImageComponent } from './components/bookPage/book-image/book-image.component';
import { BookAboutComponent } from './components/bookPage/book-about/book-about.component';
import { BookShelfComponent } from './components/bookPage/book-shelf/book-shelf.component';
import { BookCommentComponent } from './components/bookPage/book-comment/book-comment.component';
import { BookCommentsComponent } from './components/bookPage/book-comments/book-comments.component';
import { ShelfPageComponent } from './components/shelf-page/shelf-page.component';
import { ShelfbookprevievComponent } from './components/shelf-page/shelfbookpreviev/shelfbookpreviev.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    LoginpageComponent,
    RegisterComponent,
    CbComponent,
    FooterComponent,
    ToolbarComponent,
    TestsComponent,
    BookComponent,
    AdminComponent,
    BookdataComponent,
    BookImageComponent,
    BookAboutComponent,
    BookShelfComponent,
    BookCommentComponent,
    BookCommentsComponent,
    ShelfPageComponent,
    ShelfbookprevievComponent
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
