import { Component, OnInit } from '@angular/core';
import { Observable, PartialObserver, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-primer-observable',
  templateUrl: './primer-observable.component.html',
  styleUrls: ['./primer-observable.component.css'],
})
export class PrimerObservableComponent implements OnInit {
  nombre$: Observable<string> = new Observable((subscriber) => {
    const interval = setInterval(() => {
      subscriber.next(Math.random().toString());
    }, 5000);

    return () => {
      clearInterval(interval);
      console.log('INTERVAL DESTRUIDO');
    };
  });

  nombreSubject: Subject<string> = new Subject();

  partialObs: PartialObserver<string> = {
    next: (value) => {
      console.log('PARTIAL OBSERVER nombre$ [next]:', value);
    },
    complete: () => {
      console.log('PARTIAL OBSERVER nombre$ [complete]');
    },
  };

  nombre: string = '';
  nombreEnviar: string = '';

  nombreSubjectSub1!: Subscription;
  nombreSubjectSub2!: Subscription;
  subjectSub!: Subscription;

  constructor() {}

  ngOnInit(): void {
    // Subject
    this.subjectSub = this.nombre$.subscribe(this.nombreSubject);

    // Next
    this.nombreSubject.subscribe((nombre) => {
      this.nombre = nombre;
    });

    // partial Observer
    // this.nombre$.subscribe(this.partialObs);

    this.nombreSubjectSub1 = this.nombreSubject.subscribe({
      next: (nombre) => {
        console.log('SUBJECT SUB1 nombre$ [next]: ', nombre);
      },
      complete: () => {
        console.log('SUBJECT SUB1 nombre$ [complete]');
      },
    });

    this.nombreSubjectSub2 = this.nombreSubject.subscribe({
      next: (nombre) => {
        console.log('SUBJECT SUB2 nombre$ [next]: ', nombre);
      },
      complete: () => {
        console.log('SUBJECT SUB2 nombre$ [complete]');
      },
    });

    this.nombreSubjectSub1.add(this.nombreSubjectSub2);
  }

  onClickEmitValueSubject() {
    this.nombreSubject.next(this.nombreEnviar);
    this.nombreEnviar = '';
  }

  onClickCompleteSubject() {
    this.nombreSubject.complete();
  }

  onClickUnsubscribeSubject() {
    this.subjectSub.unsubscribe();
  }
}
