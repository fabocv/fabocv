import { Component } from '@angular/core';
import { HelloWorldService } from '../../core/services/hello-world.service';
import { ProjectsComponent } from "../Project/Project";
import { AcademiaComponent } from "../Academia/Academia";
import { FooterComponent } from "../Footer/Footer";

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: "./home.html",
  imports: [ProjectsComponent, AcademiaComponent, FooterComponent],
})
export class HomePage {
  message = '';

  constructor(private hello: HelloWorldService) {
    this.message = this.hello.greet('Angular');
  }
}
