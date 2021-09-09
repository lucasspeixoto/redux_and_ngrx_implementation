import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('textInputRef') textInputRef: ElementRef;

  checkCompleted: FormControl;
  textInput: FormControl;

  editing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, Validators.required);

    this.checkCompleted.valueChanges.subscribe((value) => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  edit() {
    this.editing = true;
    this.textInput.setValue(this.todo.text);

    setTimeout(() => {
      this.textInputRef.nativeElement.select();
    }, 1);
  }

  endEdition() {
    this.editing = false;

    if (this.textInput.invalid || this.textInput.value == this.todo.text) {
      return;
    }
    this.store.dispatch(
      actions.edit({ id: this.todo.id, text: this.textInput.value })
    );
  }

  del() {
    this.store.dispatch(actions.del({ id: this.todo.id }));
  }
}
