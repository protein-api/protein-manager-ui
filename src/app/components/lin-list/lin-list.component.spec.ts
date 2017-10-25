import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinListComponent } from './lin-list.component';

describe('LinListComponent', () => {
  let component: LinListComponent;
  let fixture: ComponentFixture<LinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
