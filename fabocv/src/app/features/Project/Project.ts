
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SectionTitleComponent } from '../../shared/ui/atoms/SectionTitle/SectionTitle';
import { ProjectCardComponent, ProjectData } from '../../shared/ui/molecules/ProjectCard/ProjectCard';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, ProjectCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="max-w-6xl mx-auto px-6 py-12 animate-slide-up">
      <atom-section-title title="Featured_Work" />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (project of projects; track project.title) {
          <mol-project-card [data]="project" />
        }
      </div>
    </section>
  `
})
export class ProjectsComponent {
  projects: ProjectData[] = [
    { 
      title: 'Faba Front Bench', 
      desc: 'Faba mide el costo técnico y digital de los frameworks modernos SPA en su primera carga. .', 
      stack: ['Angular', 'Vue 3', 'React', 'Svelte 5', 'VanillaJS'], 
      link: 'https://github.com/fabocv/Faba-Front-Bench' 
    },
    { 
      title: 'Santi - Punto de venta', 
      desc: 'Un POS sencillo para testear, solo para ventas y operadores, diseñado para ser usado solo con teclado numérico.', 
      stack: ['Angular', 'Typescript','RxJS'], 
      link: 'https://fabocv.github.io/santi-pos/#/login' 
    },
    { 
      title: 'EcoPlan SQL', 
      desc: 'Web que transforma los planes de ejecución de Postgres en indicadores de costos operacionales, económicos y ambientales.', 
      stack: ['Angular', 'TypeScript', 'RxJS'], 
      link: 'https://github.com/fabocv/EcoPlan-SQL' 
    },
    {
      title: 'Norkeb - caso de estudio UX',
      desc: "Empleo de procesos de diseño UX para una futura aplicación web de un growshop ficticio a modo de ejercicio. ",
      stack: ['UX'],
      link: 'https://github.com/fabocv/UX-Norkeb-caso-estudio'
    }
  ];
}
