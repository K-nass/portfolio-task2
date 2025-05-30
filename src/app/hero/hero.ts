import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  myName: string = "Karim Nasser";
  jobTitle: string = "Front-End Developer";
}
