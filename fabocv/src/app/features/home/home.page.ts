import { Component } from '@angular/core';
import { HelloWorldService } from '../../core/services/hello-world.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <!-- Esto ahora funcionará perfectamente -->
    <div class="bg-base min-h-screen text-primary font-mono">
    <h1>Hola Mundo</h1>
    </div>
    <p>{{ message }}</p>
  `,
})
export class HomePage {
  message = '';

  constructor(private hello: HelloWorldService) {
    this.message = this.hello.greet('Angular');
  }
}
