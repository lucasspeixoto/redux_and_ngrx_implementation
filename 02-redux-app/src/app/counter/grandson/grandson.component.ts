import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

import * as actions from '../counter.actions';

@Component({
  selector: 'app-grandson',
  templateUrl: './grandson.component.html',
  styleUrls: ['./grandson.component.scss'],
})
export class GrandsonComponent {
  /*  @Input() counter: number;
  @Output() changeCounter = new EventEmitter<number>(); */

  counter: number;

  constructor(private store: Store<AppState>) {
    this.store.select('counter').subscribe((counter: number) => {
      this.counter = counter;
    });
  }

  reset() {
    this.store.dispatch(actions.reset());
  }
}
