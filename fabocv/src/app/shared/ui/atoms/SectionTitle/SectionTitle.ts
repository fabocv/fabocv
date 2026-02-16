import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'atom-section-title',
  standalone: true,
  template: `
    <h2 class="text-2xl md:text-3xl font-bold text-transparent bg-clip-text 
      bg-gradient-to-r from-primary to-accent mb-8 animate-fade-in">
      <span class="text-secondary mr-2">&lt;</span>{{ title }}<span class="text-secondary ml-2">/&gt;</span>
    </h2>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTitleComponent {
  @Input({ required: true }) title!: string;
}
