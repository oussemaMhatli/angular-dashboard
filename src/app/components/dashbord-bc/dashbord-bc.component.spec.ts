import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordBcComponent } from './dashbord-bc.component';

describe('DashbordBcComponent', () => {
  let component: DashbordBcComponent;
  let fixture: ComponentFixture<DashbordBcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordBcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordBcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
