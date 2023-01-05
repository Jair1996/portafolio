import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() href!: string;
  @Input() value!: string;
  @Input() type!: string;
  @Input() model!: string;
  @Input() size!: string;
  @Input() disabled!: boolean;
}
