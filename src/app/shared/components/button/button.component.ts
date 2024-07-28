import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({ required: true }) text: string = '';
  @Input() disabled: boolean = false;
  @Input() backgroundColor: string = '';
  @Input() type: string = 'button';
}
