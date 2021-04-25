import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  clear = '';
  title = 'todo';
  ele = new Array();

  remove(index) {
    if (index > -1) {
      this.ele.splice(index, 1);
    }
  }

  edit(value) {
    console.log('edit call');
    this.ele[value.i] = value.v;
    console.log(this.ele);
  }

  add(value) {
    if (value !== '') {
      this.ele.push(value);
      console.log(this.ele);
    } else {
      alert('Fill Input Box');
    }
  }
}
