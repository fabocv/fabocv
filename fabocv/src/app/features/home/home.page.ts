import { Component } from '@angular/core';
import { HelloWorldService } from '../../core/services/hello-world.service';
import { ProjectsComponent } from "../Project/Project";
import { AcademiaComponent } from "../Academia/Academia";
import { FooterComponent } from "../Footer/Footer";
import { WorkComponent } from "../../shared/ui/molecules/Work/Work";

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: "./home.html",
  imports: [ProjectsComponent, AcademiaComponent, FooterComponent, WorkComponent],
})
export class HomePage {
  message = '';

  constructor(private hello: HelloWorldService) {
    this.message = this.hello.greet('Angular');
  }
}
