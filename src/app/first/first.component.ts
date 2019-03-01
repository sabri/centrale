import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() {
  }

  say() {
    alert('sabri');
  }

  ngOnInit() {
  }

}
