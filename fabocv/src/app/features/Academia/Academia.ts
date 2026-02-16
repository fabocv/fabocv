import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-academia',
  imports: [],
  template: `<p>Academia works!</p>`,
  styleUrl: './Academia.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Academia { }
