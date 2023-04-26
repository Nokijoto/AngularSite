import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAboutComponent } from './book-about.component';

describe('BookAboutComponent', () => {
  let component: BookAboutComponent;
  let fixture: ComponentFixture<BookAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
