import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.scss'
})
export class DropDownComponent {
  @Input() options: string[] = [];
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() value: string = '';
  @Output() onSelect = new EventEmitter<string>();

  isOpen = false;

  constructor(private eRef: ElementRef) { }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.isOpen = false;
    this.onSelect.emit(option);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
