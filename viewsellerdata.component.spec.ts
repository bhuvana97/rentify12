import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsellerdataComponent } from './viewsellerdata.component';

describe('ViewsellerdataComponent', () => {
  let component: ViewsellerdataComponent;
  let fixture: ComponentFixture<ViewsellerdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsellerdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsellerdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
