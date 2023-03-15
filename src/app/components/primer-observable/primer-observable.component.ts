import { Component, OnInit } from '@angular/core';
import { Observable, PartialObserver, Subject } from 'rxjs';

@Component({
  selector: 'app-primer-observable',
  templateUrl: './primer-observable.component.html',
  styleUrls: ['./primer-observable.component.css'],
})
export class PrimerObservableComponent implements OnInit {
  // Es Observable, dentro de el pueden realizar operaciones con los datos
  // Recibe Suscriber, el cual indica el comportamiento de emitir datos
  nombre$: Observable<string> = new Observable((subscriber) => {
    subscriber.next('Guts');
  });

  // Es Observable y Observer
  nombreSubject: Subject<string> = new Subject();

  // Observer define como se usaran los datos segun el comportamiento del Observable
  partialObs: PartialObserver<string> = {
    next: () => {
      console.log('nombre$ recibe valor');
    },
    complete: () => {
      console.log('mensaje de completed en Partial Observer');
    },
  };

  nombre: string = '';
  nombreEnviar: string = '';

  constructor() {}

  ngOnInit(): void {
    // Subject
    this.nombre$.subscribe(this.nombreSubject);

    // Next
    this.nombre$.subscribe((nombre) => {
      this.nombre = nombre;
    });

    // partial Observer
    this.nombre$.subscribe(this.partialObs);

    this.nombreSubject.subscribe({
      next: (nombre) => {
        console.log('SE EMITE NOMBRE EN OBSERVER DEL SUBJECT: ', nombre);
      },
      complete: () => {
        console.log('SE COMPLETA SUBJECT');
      },
    });
  }

  onClickEmitValueSubject() {
    this.nombreSubject.next(this.nombreEnviar);
    this.nombreEnviar = '';
  }

  onClickCompleteSubject() {
    this.nombreSubject.complete();
  }
}
