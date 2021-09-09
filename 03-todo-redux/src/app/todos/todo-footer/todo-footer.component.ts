import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Filter } from 'src/app/filter/filter.actions';
import * as fromFilter from 'src/app/filter/filter.actions';
import * as fromTodos from '../todo.actions';
@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  actualFilter: Filter = 'all';
  filters: Filter[] = ['all', 'completed', 'pending'];
  pending: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe((state) => {
      this.actualFilter = state.filter;
      this.pending = state.todos.filter((todo) => !todo.completed).length;
    });
  }

  setFilter(filter: Filter) {
    this.store.dispatch(fromFilter.setFilter({ filter: filter }));
  }

  clearCompleted() {
    this.store.dispatch(fromTodos.clearCompleted());
  }
}
