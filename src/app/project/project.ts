import { Component } from '@angular/core';
@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {
  projects = {
    project1: {
      projectImg: "/project1.png",
      title: "Multi step form",
      desc: "In this frontend challenge, you'll build a Multi-step Form. This challenge is perfect for you if you're interested in building complex and reusable front-end web components and taking your front-end skills to the next level! You can use as many (or as few) tools, libraries, and frameworks as you'd like. If you're trying to learn something new, this might be a great way to push yourself. "
    },
    project2: {
      projectImg: "/project2.jpeg",
      title: "E-commerce product page",
      desc: "Your users should be able to: Open a lightbox gallery by clicking on the large product image Switch the large product image by clicking on the small thumbnail images Add items to the cart View the cart and remove items from it View the optimal layout for the site depending on their device's screen size See hover states for all interactive elements on the page"
    },
    project3: {
      projectImg: "/project3.webp",
      title: "REST Countries API ",
      desc: " users should be able to: See all countries from the API on the homepage Search for a country using an input field Filter countries by region Click on a country to see more detailed information on a separate page Click through to the border countries on the detail page View the optimal layout for the interface depending on their device's screen size See hover and focus states for all interactive elements on the page Bonus: Toggle the color scheme between light and dark mode "
    }
  }
}
