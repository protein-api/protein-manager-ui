import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionFullViewComponent } from './reaction-full-view.component';

describe('ReactionFullViewComponent', () => {
  let component: ReactionFullViewComponent;
  let fixture: ComponentFixture<ReactionFullViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactionFullViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactionFullViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
