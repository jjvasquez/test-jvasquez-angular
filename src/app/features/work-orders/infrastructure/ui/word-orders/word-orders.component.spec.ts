import { ComponentFixture, TestBed } from '@angular/theme/testing';

import { WordOrdersComponent } from './word-orders.component';

describe('WordOrdersComponent', () => {
  let component: WordOrdersComponent;
  let fixture: ComponentFixture<WordOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
