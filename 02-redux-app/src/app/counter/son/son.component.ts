import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss'],
})
export class SonComponent {
  /*  @Input() counter: number;
  @Output() changeCounter = new EventEmitter<number>(); */

  counter: number;

  constructor(private store: Store<AppState>) {
    this.store.select('counter').subscribe((counter: number) => {
      this.counter = counter;
    });
  }

  multiply() {
    this.store.dispatch(
      actions.multiply({
        number: 4,
      })
    );
  }

  divide() {
    this.store.dispatch(
      actions.divide({
        number: 3,
      })
    );
  }
}
