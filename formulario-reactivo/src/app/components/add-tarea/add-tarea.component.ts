import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tarea } from '../../interfaces/tarea.interface';

@Component({
  selector: 'app-add-tarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-tarea.component.html',
  styleUrl: './add-tarea.component.css'
})
export class AddTareaComponent {
  @Output()
  emitirTarea: EventEmitter<Tarea> = new EventEmitter();
  tarea: Tarea = {
    id: 0,
    tarea: ''
  }

  fb = inject(FormBuilder)

  formulario = this.fb.nonNullable.group(
    {

    }
  )
  addTarea(){
    this.emitirTarea.emit(this.tarea);
    console.log(this.tarea);
  }
}
