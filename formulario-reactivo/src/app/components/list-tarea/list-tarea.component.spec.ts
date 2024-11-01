import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTareaComponent } from './list-tarea.component';

describe('ListTareaComponent', () => {
  let component: ListTareaComponent;
  let fixture: ComponentFixture<ListTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
