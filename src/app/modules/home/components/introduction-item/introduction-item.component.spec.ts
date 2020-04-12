import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionItemComponent } from './introduction-item.component';

describe('IntroductionItemComponent', () => {
  let component: IntroductionItemComponent;
  let fixture: ComponentFixture<IntroductionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
