import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visual-mode',
  templateUrl: './visual-mode.component.html',
  styleUrls: ['./visual-mode.component.scss']
})
export class VisualModeComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

  changeMode(){
    this.modeSelected=(this.modeSelected===0?1:0);
  }

}
