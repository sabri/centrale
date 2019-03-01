import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() {
  }

  @Input() couleur = 'red';

  colour = 'yellow';


  color(c) {
    this.colour = c.value;
    c = '';


  }


  ngOnInit() {
  }

  sabri(clc) {
    alert(clc);
  }

}
