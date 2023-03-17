import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})

export class FilhoComponent {
  @Output() changeValue: EventEmitter<any> = new EventEmitter();
  
  handleClick():void {
    this.changeValue.emit();
  }
}
