import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlDatatableDemoComponent } from './sl-datatable-demo.component';

describe('SlDatatableDemoComponent', () => {
  let component: SlDatatableDemoComponent;
  let fixture: ComponentFixture<SlDatatableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlDatatableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlDatatableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
