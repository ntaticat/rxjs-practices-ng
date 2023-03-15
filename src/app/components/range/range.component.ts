import { Component, OnInit } from '@angular/core';
import { asyncScheduler, filter, observeOn, range } from 'rxjs';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css'],
})
export class RangeComponent implements OnInit {
  ngOnInit(): void {
    console.log('INICIA EJECUCION');
    range(2).subscribe((value) => {
      console.log('RANGE1 EMITS: ', value);
    });
    console.log('Termina EJECUCION');

    console.log('INICIA EJECUCION');
    range(10, 10)
      .pipe(
        filter((value) => value % 2 == 0),
        observeOn(asyncScheduler)
      )
      .subscribe((value) => {
        console.log('RANGE2 EMITS: ', value);
      });
    console.log('TERMINA EJECUCION');
  }
}
