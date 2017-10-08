import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructrueListComponent } from './structrue-list.component';

describe('StructrueListComponent', () => {
  let component: StructrueListComponent;
  let fixture: ComponentFixture<StructrueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructrueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructrueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
