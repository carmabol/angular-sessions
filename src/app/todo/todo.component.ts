import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  modeSelected=0;
  mode=[
    { 
      img_switch:'../../assets/images/icon-sun.svg',
      img_bg:"../../assets/images/bg-desktop-light.jpg"
    },
    {
      img_switch:'../../assets/images/icon-moon.svg',
      img_bg:"../../assets/images/bg-desktop-dark.jpg"
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

  getItemsLeft() {
    return this.items.filter(item => !item.isComplete).length;
  }

  changeMode(){
    this.modeSelected=(this.modeSelected===0?1:0);
  }

}
