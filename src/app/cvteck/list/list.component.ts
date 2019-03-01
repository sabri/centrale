import {Component, OnInit} from '@angular/core';
import {Person} from '../person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personne: Person[];

  constructor() {
  }

  ngOnInit() {
  }

}
