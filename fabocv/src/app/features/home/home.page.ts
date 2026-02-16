import { Component } from '@angular/core';
import { HelloWorldService } from '../../core/services/hello-world.service';
import { ProjectsComponent } from "../Project/Project";

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <app-projects/>
  `,
  imports: [ProjectsComponent],
})
export class HomePage {
  message = '';

  constructor(private hello: HelloWorldService) {
    this.message = this.hello.greet('Angular');
  }
}
