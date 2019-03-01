import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  constructor() {
  }

  clc = 'sabri';
  @Input() couleur = 'pink';
  @ Input() events = new EventEmitter();

  ngOnInit() {
  }

  sabri() {
    this.events.emit(this.clc);
  }

}
