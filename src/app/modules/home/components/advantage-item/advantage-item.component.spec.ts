import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantageItemComponent } from './advantage-item.component';

describe('AdvantageItemComponent', () => {
  let component: AdvantageItemComponent;
  let fixture: ComponentFixture<AdvantageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvantageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvantageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
