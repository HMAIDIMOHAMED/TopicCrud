import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTopicsComponent } from './display-topics.component';

describe('DisplayTopicsComponent', () => {
  let component: DisplayTopicsComponent;
  let fixture: ComponentFixture<DisplayTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayTopicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
