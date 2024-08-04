import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-box',
  standalone: true,
  imports: [],
  templateUrl: './input-box.component.html',
  styleUrl: './input-box.component.scss'
})
export class InputBoxComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  @Input() placeHolder: string = "";

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.valueChange.emit(this.value);
  }
}
