// shared/components/badge/badge.ts
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-badge',
  imports: [],
  template: `<span [class]="classes()">{{ label() }}</span>`,
})
export class Badge {
  label = input.required<string>();
  color = input<string>('blue');   // 'blue', 'red', 'green'...

  classes = computed(() =>
    `text-xs font-medium px-2 py-0.5 rounded-full bg-${this.color()}-100 text-${this.color()}-700`
  );
}