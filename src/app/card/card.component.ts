import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() name: string;
  @Input() index: number;
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  isDisabled = true;
  constructor() {}

  callEdit() {
    this.isDisabled = false;
  }
  send(index, value) {
    let data = { i: index, v: value };
    this.edit.emit(data);
    this.isDisabled = true;
  }
  callRemove(value) {
    this.remove.emit(value);
  }
  ngOnInit(): void {
    console.log(this.name);
  }
}
