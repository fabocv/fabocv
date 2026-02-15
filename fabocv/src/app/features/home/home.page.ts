import { Component } from '@angular/core';
import { HelloWorldService } from '../../core/services/hello-world.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <h1>Home</h1>
    <p>{{ message }}</p>
  `,
})
export class HomePage {
  message = '';

  constructor(private hello: HelloWorldService) {
    this.message = this.hello.greet('Angular');
  }
}
