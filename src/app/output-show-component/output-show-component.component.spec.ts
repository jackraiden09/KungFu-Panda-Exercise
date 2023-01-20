import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputShowComponentComponent } from './output-show-component.component';

describe('OutputShowComponentComponent', () => {
  let component: OutputShowComponentComponent;
  let fixture: ComponentFixture<OutputShowComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputShowComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputShowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
