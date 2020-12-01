import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  annee = 0;

  constructor() { }

  ngOnInit(): void {
    this.annee = new Date().getFullYear();
  }

}
