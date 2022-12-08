import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterialUiComponent } from './meterial-ui.component';

describe('MeterialUiComponent', () => {
  let component: MeterialUiComponent;
  let fixture: ComponentFixture<MeterialUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterialUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterialUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
