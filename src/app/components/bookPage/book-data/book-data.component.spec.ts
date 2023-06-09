import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookdataComponent } from './book-data.component';

describe('BookdataComponent', () => {
  let component: BookdataComponent;
  let fixture: ComponentFixture<BookdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
