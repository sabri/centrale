import {Component, OnInit} from '@angular/core';
import {Person} from '../person';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {

  constructor() {
  }

  Personne: Person[];

  ngOnInit() {
    this.Personne = [
      new Person( 1, 'sabri', 'baazaoui',  'assets/images/rotating_card_profile.png',  23, 1234),
    new Person( 2, 'wiem', 'zaid', 'assets/images/rotating_card_profile.png',  25, 12345)
  ];
  }

}
