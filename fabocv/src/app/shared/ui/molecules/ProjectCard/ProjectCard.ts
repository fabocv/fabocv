

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechBadgeAtom } from '../../atoms/TechBadge/TechBadge';

export interface ProjectData {
  title: string;
  desc: string;
  stack: string[];
  link: string;
}

@Component({
  selector: 'mol-project-card',
  standalone: true,
  imports: [CommonModule, TechBadgeAtom],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="group relative bg-surface border border-white/10 p-6 rounded-lg 
    hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 
    hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.5)] h-full flex flex-col">
      
      <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl 
      from-primary/10 to-transparent rounded-tr-lg opacity-0 group-hover:opacity-100 
      transition-opacity duration-500"></div>

      <h3 class="text-xl font-bold text-gray-100 group-hover:text-primary transition-colors duration-300">
        {{ data.title }}
      </h3>
      
      <p class="mt-4 text-secondary text-sm leading-relaxed flex-grow">
        {{ data.desc }}
      </p>

      <div class="mt-6 flex flex-wrap gap-2">
        @for(tech of data.stack; track tech) {
          <atom-tech-badge [label]="tech" />
        }
      </div>

      <a [href]="data.link" target="_blank" class="mt-6 inline-flex items-center text-sm text-primary 
        hover:text-accent transition-colors duration-300">
        Ver Proyecto <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </div>
  `
})
export class ProjectCardComponent {
  @Input({ required: true }) data!: ProjectData;
}
