import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions-todo',
  templateUrl: './actions-todo.component.html',
  styleUrls: ['./actions-todo.component.scss']
})
export class ActionsTodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getItemsLeft() {
    return 5;//this.items.filter(item => !item.isComplete).length;
  }

}
