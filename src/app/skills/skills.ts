import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  skills = {
    HTML: 95,
    CSS: 90,
    JavaScript: 90,
    Angular: 60
  }
}
