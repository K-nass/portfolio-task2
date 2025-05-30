import { Component } from '@angular/core';
import { Hero } from './hero/hero'
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Project } from './project/project';
import { Footer } from "./footer/footer";



@Component({
  selector: 'app-root',
  imports: [Hero, About, Skills, Project, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'first-app';
}

