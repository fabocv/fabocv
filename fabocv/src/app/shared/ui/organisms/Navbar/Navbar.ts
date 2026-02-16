import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'org-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="sticky top-0 z-50 w-full backdrop-blur-md bg-base/80 border-b border-white/5">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <!-- Logo Atom -->
        <div class="text-xl font-bold tracking-tighter">
          <span class="text-primary">dev</span><span class="text-white">.portfolio()</span>
        </div>

        <div class="hidden md:flex gap-8">
          @for(item of navItems; track item.path) {
            <a [routerLink]="item.path" 
               routerLinkActive="text-primary border-primary"
               class="relative text-sm font-medium text-secondary hover:text-white transition-colors 
               duration-300 py-2 border-b-2 border-transparent">
               <span class="text-primary mr-1">{{ item.id }}.</span>{{ item.label }}
            </a>
          }
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  navItems = [
    { id: '01', label: 'Projects', path: '/projects' },
    { id: '02', label: 'Academia', path: '/academia' },
    { id: '03', label: 'About', path: '/about' }
  ];
}
