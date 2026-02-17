import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  ProjectCardComponent,
  ProjectData,
} from '../../shared/ui/molecules/ProjectCard/ProjectCard';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <section class="max-w-4xl mx-auto animate-fade-in-up">
    <div class=" border-b border-emerald-400/20 pb-4 pt-8">
      <h2 class="text-3xl font-bold text-emerald-400 flex items-center gap-3">
        <span class="text-xl opacity-70">./</span>projects_log
        <span class="animate-pulse text-emerald-400">_</span>
      </h2>
      <p class="text-sm text-gray-400 mt-2 font-mono">[INFO] Recorrido como freelancer 2025-2026</p>
    </div>

    <div class="relative ml-4 md:ml-6 my-8 ">

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (project of projects; track project.title) {
            <mol-project-card [data]="project" />
          }
        </div>
    </div>
        </section>
  `,
})
export class ProjectsComponent {
  projects: ProjectData[] = [
    {
      title: 'Faba Front Bench',
      desc: 'Faba mide el costo técnico y digital de los frameworks frontend SPA modernos en su primera carga.',
      stack: ['Angular', 'Vue 3', 'React', 'Svelte 5', 'VanillaJS'],
      link: 'https://github.com/fabocv/Faba-Front-Bench',
      status: 'Finalizado'
    },
    {
      title: 'Santi - Punto de venta',
      desc: 'Un POS sencillo para testear, solo para ventas y operadores, diseñado para ser usado solo con teclado numérico.',
      stack: ['Angular', 'Typescript', 'RxJS'],
      link: 'https://fabocv.github.io/santi-pos/#/login',
      status: 'Por Testear'
    },
    {
      title: 'EcoPlan SQL',
      desc: 'Web que transforma los planes de ejecución de Postgres en indicadores de costos operacionales, económicos y ambientales.',
      stack: ['Angular', 'TypeScript', 'RxJS'],
      link: 'https://github.com/fabocv/EcoPlan-SQL',
      status: 'En desarrollo'
    },
    {
      title: 'Norkeb - caso de estudio UX',
      desc: 'Empleo de procesos de diseño UX para una futura aplicación web de un growshop ficticio a modo de ejercicio. ',
      stack: ['UX'],
      link: 'https://github.com/fabocv/UX-Norkeb-caso-estudio',
      status: 'Finalizado'
    },
    {
      title: 'Fabo Portafolio 2026',
      desc: 'Mi portafolio. Pagespeed: 100% rendimiento.',
      stack: ['Angular', 'TypeScript'],
      link: 'https://fabocv.github.io/fabocv/',
      status: 'Finalizado'
    },
  ];
}
