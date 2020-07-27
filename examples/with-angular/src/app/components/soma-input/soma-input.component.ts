import { Component, Input, forwardRef, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SomaInputComponent),
  multi: true
};

@Component({
  selector: 'soma-input',
  templateUrl: './soma-input.component.html',
  styleUrls: ['./soma-input.component.css'],
  providers: [INPUT_VALUE_ACCESSOR]
})
export class SomaInputComponent implements ControlValueAccessor {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.onChange = () => {};
  }

  @Input('label') label: string;
  @Input('name') name: string;
  @Input('inputId') inputId: string;
  @Input('value') value: string;

  @HostListener('soma-change', ['$event.detail']) handleChange(value: string) {
    this.onChange(value);
  }

  onChange: (value: string) => void;

  writeValue(value: any): void {
    this.renderer.setProperty(this.element.nativeElement, 'value', value);
  }

  registerOnChange(fn: (value: string) => void) {
    this.onChange = value => fn(value);
  }
  
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}