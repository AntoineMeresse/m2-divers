import { Component, OnInit } from '@angular/core';
import {Card, getAllCards} from '../data-service';

@Component({
  selector: 'app-main-div',
  templateUrl: './main-div.component.html',
  styleUrls: ['./main-div.component.css']
})
export class MainDivComponent implements OnInit {

  cards?: Card[];

  constructor() { }

  ngOnInit(): void {
    getAllCards().then((cards) => this.cards = cards );
  }

}
