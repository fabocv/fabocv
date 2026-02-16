import { Component, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('fabocv');

  constructor(private meta: Meta, protected title: Title) {}

  ngOnInit() {
    // 3. Definir los metadatos
    this.title.setTitle('Fabo | Full Stack Developer');

    // addTags agrega las etiquetas si no existen, o updateTag las actualiza
    this.meta.addTags([
      { name: 'description', content: 'Portafolio profesional de Fabo. Desarrollador Full Stack experto en Angular, Tailwind CSS y Arquitectura de Software.' },
      { name: 'author', content: 'Fabo' },
      { name: 'keywords', content: 'Angular, Developer, Portfolio, Tailwind, TypeScript, Fabo' },
      { name: 'robots', content: 'index, follow' }
    ]);
  }
}


