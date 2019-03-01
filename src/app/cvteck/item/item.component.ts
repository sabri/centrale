import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../person';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() {
  }

  @Input() personne: Person[];

  ngOnInit() {
  }

}
