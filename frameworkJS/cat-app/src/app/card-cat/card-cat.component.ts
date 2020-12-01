import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../data-service';

@Component({
  selector: 'app-card-cat',
  templateUrl: './card-cat.component.html',
  styleUrls: ['./card-cat.component.css']
})
export class CardCatComponent implements OnInit {

  @Input()
  card?: Card;

  constructor() { }

  ngOnInit(): void {
  }

}
