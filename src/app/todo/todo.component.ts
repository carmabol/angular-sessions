import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  modeSelected=0;
  mode=[
    { 
      img_switch:'../../assets/images/icon-sun.svg',

    },
    {
      img_switch:'../../assets/images/icon-moon.svg',
    }];
  
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

  getItemsLeft(){
    let count=this.items.length;
    for (const iterator of this.items) {
      if(iterator.isComplete)
        count--;
    }
    return count;
  }

}
