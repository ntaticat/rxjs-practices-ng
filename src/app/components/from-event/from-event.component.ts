import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css'],
})
export class FromEventComponent implements OnInit {
  ngOnInit(): void {
    fromEvent<PointerEvent>(document, 'click').subscribe((event) => {
      // console.log('EVENTO: ', event.clientX);
    });

    fromEvent<KeyboardEvent>(document, 'keydown').subscribe(
      ({ key, timeStamp }) => {
        console.log('EVENTO: ', key);
        console.log('EVENTO: ', timeStamp);
      }
    );
  }
}
