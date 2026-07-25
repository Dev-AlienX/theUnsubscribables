import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  imports: [],
  templateUrl: './skeleton.html',
  styleUrl: './skeleton.scss',
})
export class Skeleton {
  @Input() shape: 'circle' | 'square' | 'rectangle' | 'text' = 'rectangle';
  @Input() width: string = '100%';
  @Input() height: string = '1rem';
  @Input() animation: 'wave' | 'pulse' | 'none' = 'wave';

  get skeletonClass() {
    return `skeleton-${this.shape} animation-${this.animation}`;
  }

  get skeletonStyle() {
    return { width: this.width, height: this.height };
  }
}
