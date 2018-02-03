import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinFullViewComponent } from './protein-full-view.component';

describe('ProteinFullViewComponent', () => {
  let component: ProteinFullViewComponent;
  let fixture: ComponentFixture<ProteinFullViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProteinFullViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProteinFullViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
