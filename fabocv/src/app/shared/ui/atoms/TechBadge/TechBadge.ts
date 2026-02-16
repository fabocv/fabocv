import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'atom-tech-badge',
  standalone: true,
  template: `
    <span class="px-3 py-1 text-xs font-semibold rounded-full border border-primary/30 
      text-gray-200/50 bg-primary/10 hover:bg-primary/20 transition-all duration-300 cursor-default">
      {{ label }}
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechBadgeAtom {
  @Input({ required: true }) label!: string;
}
