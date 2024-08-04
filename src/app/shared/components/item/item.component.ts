import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ToggleComponent } from '../toggle/toggle.component';
import { RouterLink } from '@angular/router';
import { Todo } from '../../../core/models/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [ButtonComponent, ToggleComponent, RouterLink, CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input({ required: true }) todo: Todo = {} as Todo;
  @Output() onToggle = new EventEmitter<string>();

  onToggleState() {
    this.onToggle.emit(this.todo.id);
  }
}
