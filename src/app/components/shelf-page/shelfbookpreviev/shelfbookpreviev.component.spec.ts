import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfbookprevievComponent } from './shelfbookpreviev.component';

describe('ShelfbookprevievComponent', () => {
  let component: ShelfbookprevievComponent;
  let fixture: ComponentFixture<ShelfbookprevievComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShelfbookprevievComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelfbookprevievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
