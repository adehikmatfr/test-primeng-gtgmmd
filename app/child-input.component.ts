import { Component, Input, OnChanges, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styles: [`h1 { font-family: Lato; }`],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ChildInputComponent)
    }
  ]
})
export class ChildInputComponent implements OnChanges, ControlValueAccessor {
  private fnCVAFireChange: (e) => void;
  private fnCVAFireTouched: () => void;
  private disabled: boolean;
  private selectedItem: any;
  private acResults: any[] = [];

  constructor() {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes!', changes);
  }

  onSelect(e) {
    this.fnCVAFireChange(e);
  }

  onAutoCompleteSearch(e) {
    this.acResults = [
    {
      display: 'Kevin Arouza'
    }, 
    {
      display: 'Kevin Smith'
    }, 
    {
      display: 'Katie Holmes'
    }, 
    {
      display: 'John Smith'
    }].filter(i => i.display.startsWith(e.query));
  }

  writeValue(obj: any): void {
    this.selectedItem = obj;
  }

  registerOnChange(fn: any): void {
    this.fnCVAFireChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.fnCVAFireTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }  

}
