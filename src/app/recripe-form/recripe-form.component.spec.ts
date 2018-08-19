import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecripeFormComponent } from './recripe-form.component';

describe('RecripeFormComponent', () => {
  let component: RecripeFormComponent;
  let fixture: ComponentFixture<RecripeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecripeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecripeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
