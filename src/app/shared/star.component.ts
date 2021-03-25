import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  rating: number = 4;
  cropWidth = 75;

  ngOnChanges(): void {
    this.cropWidth = (this.rating * 75) / 5;
  }
}
