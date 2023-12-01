import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeRootComponent } from './practice-root.component';

describe('PracticeRootComponent', () => {
  let component: PracticeRootComponent;
  let fixture: ComponentFixture<PracticeRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
