import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  items=[
    {
      isComplete:true,
      description:'Complete online JavaScript course'
    },
    {
      isComplete:false,
      description:'Jog around the park 3x'
    },
    {
      isComplete:false,
      description:'10 minutes meditation'
    },
    {
      isComplete:false,
      description:'Read for 1 hour'
    },
    {
      isComplete:false,
      description:'Pick up groceries'
    },
    {
      isComplete:false,
      description:'Complete Todo App on Frontend Mentor'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
